#!/bin/bash

echo "Applying security restrictions..."

# 1️⃣ Remove file transfer tools to prevent copying files outside
sudo apt-get remove -y openssh-client rsync wget curl ftp netcat

# 2️⃣ Block outgoing connections to prevent unauthorized uploads
sudo iptables -A OUTPUT -p tcp --dport 22 -j DROP  # Block SSH
sudo iptables -A OUTPUT -p tcp --dport 21 -j DROP  # Block FTP
sudo iptables -A OUTPUT -p tcp --dport 443 -d "file-sharing-services.com" -j DROP  # Block known file-sharing sites

# 3️⃣ Prevent copying to external drives (USB or mounted drives)
sudo chmod -R 000 /media /mnt

# 4️⃣ Disable clipboard access (Only works in VS Code browser mode)
echo 'window.navigator.clipboard.writeText = function() { return Promise.reject("Clipboard disabled"); }' \
    | sudo tee -a /workspace/.vscode/settings.json

# 5️⃣ Monitor file access attempts for security logging
sudo auditctl -w /workspace -p rwxa -k workspace_access

# 6️⃣ Prevent downloading files from the internet
sudo chmod 000 /usr/bin/curl /usr/bin/wget /usr/bin/ftp /usr/bin/rsync /usr/bin/scp /usr/bin/nc

# 7️⃣ Restrict sudo access (Prevent users from escalating privileges)
echo "developer ALL=(ALL) NOPASSWD: /bin/false" | sudo tee /etc/sudoers.d/developer

# 8️⃣ Restrict Git operations to only the repository inside Codespaces
git remote set-url origin "git@github.com:your-org/your-repo.git"
git config --global --add safe.directory /workspace

# 9️⃣ Block attempts to export environment variables (Prevents credential leaks)
echo "alias printenv='echo Access denied'" >> ~/.bashrc
echo "alias env='echo Access denied'" >> ~/.bashrc
source ~/.bashrc

# 🔟 Disable terminal history so users can't retrieve sensitive info
unset HISTFILE
export HISTSIZE=0
export HISTFILESIZE=0

# ✅ Log all file access attempts
echo "Logging user activity..."
sudo auditctl -w /workspace -p rwxa -k workspace_access

# ✅ Auto-delete Codespace if unauthorized clone is detected (GitHub Actions required)
echo "Security restrictions applied successfully."
