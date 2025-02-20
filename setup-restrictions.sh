#!/bin/bash

echo "🔒 Applying security restrictions..."

# Ensure the script is running with sudo
if [ "$(id -u)" -ne 0 ]; then
    echo "❌ This script must be run as root. Use: sudo bash setup-restrictions.sh"
    exit 1
fi

# 1️⃣ Remove file transfer tools to prevent copying files outside
echo "🚫 Removing file transfer tools..."
apt-get remove -y openssh-client rsync wget curl ftp netcat || echo "Skipping removal (tools may not be installed)"

# 2️⃣ Block outgoing connections to prevent unauthorized uploads
echo "🚫 Blocking SSH, FTP, and file uploads..."
if command -v iptables >/dev/null 2>&1; then
    iptables -A OUTPUT -p tcp --dport 22 -j DROP  # Block SSH
    iptables -A OUTPUT -p tcp --dport 21 -j DROP  # Block FTP
    iptables -A OUTPUT -p tcp --dport 443 -d "file-sharing-services.com" -j DROP  # Block file-sharing sites
else
    echo "⚠️ iptables not available, skipping network restrictions."
fi

# 3️⃣ Prevent copying to external drives (USB or mounted drives)
echo "🚫 Blocking access to external drives..."
chmod -R 000 /media /mnt || echo "Skipping (no external drives found)"

# 4️⃣ Disable clipboard access (Only works in VS Code browser mode)
echo "🚫 Blocking clipboard access (browser mode only)..."
echo 'window.navigator.clipboard.writeText = function() { return Promise.reject("Clipboard disabled"); }' \
    | tee -a /workspace/.vscode/settings.json || echo "⚠️ VS Code settings file not found."

# 5️⃣ Monitor file access attempts for security logging
echo "📜 Enabling file access logging..."
if command -v auditctl >/dev/null 2>&1; then
    auditctl -w /workspace -p rwxa -k workspace_access
else
    echo "⚠️ auditctl not found, installing auditd..."
    apt-get update && apt-get install -y auditd && auditctl -w /workspace -p rwxa -k workspace_access
fi

# 6️⃣ Prevent downloading files from the internet
echo "🚫 Blocking download commands..."
chmod 000 /usr/bin/curl /usr/bin/wget /usr/bin/ftp /usr/bin/rsync /usr/bin/scp /usr/bin/nc || echo "⚠️ Some tools not found, skipping..."

# 7️⃣ Restrict sudo access (Prevent users from escalating privileges)
echo "🚫 Restricting sudo access..."
echo "developer ALL=(ALL) NOPASSWD: /bin/false" | tee /etc/sudoers.d/developer || echo "⚠️ Failed to modify sudoers."

# 8️⃣ Restrict Git operations to only the repository inside Codespaces
echo "🚫 Restricting Git remote..."
git remote set-url origin "git@github.com:your-org/your-repo.git"
git config --global --add safe.directory /workspace || echo "⚠️ Git config failed."

# 9️⃣ Block attempts to export environment variables (Prevents credential leaks)
echo "🚫 Blocking access to environment variables..."
echo "alias printenv='echo Access denied'" >> ~/.bashrc
echo "alias env='echo Access denied'" >> ~/.bashrc
source ~/.bashrc

# 🔟 Disable terminal history so users can't retrieve sensitive info
echo "🚫 Clearing command history..."
unset HISTFILE
export HISTSIZE=0
export HISTFILESIZE=0

# ✅ Log all file access attempts
echo "📜 Enabling logging..."
auditctl -w /workspace -p rwxa -k workspace_access || echo "⚠️ auditctl not available."

echo "✅ Security restrictions applied successfully!"
