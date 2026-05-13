# Secure File Upload from VM to Azure Blob Storage Using Managed Identity

This project demonstrates how to securely upload files from an Azure Virtual Machine (VM) to Azure Blob Storage using Azure Managed Identity without storing secrets or access keys inside the application.

---

# Architecture

```text
User → Node.js Web App → Managed Identity → Azure Blob Storage
```

---


# Prerequisites

Before starting, ensure you have:

- Azure Subscription
- Azure VM (Ubuntu)
- Storage Account
- Blob Container
- Managed Identity enabled on VM
- Storage Blob Data Contributor role assigned

---

# Step 1: Connect to Azure VM

```bash
ssh azureuser@<VM_PUBLIC_IP>
```

---

# Step 2: Install Dependencies

```bash
sudo apt update
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
sudo apt install -y nodejs

```

Verify installation:

```bash
node -v
npm -v
```

---

# Step 3: Create Application Directory

```bash
clone the repo if not clone yet
cd blob-app
```

---

# Step 4: Initialize Node.js Project

```bash
npm init -y
```

---

# Step 5: Install Required Packages

```bash
npm install express @azure/identity @azure/storage-blob multer
```

---

# Step 6: Create Application

Create application file:

```bash
vi app.js
```

Paste the following code:

---

# Step 7: Run Application

```bash
node app.js
```

---

# Step 8: Access Application

Open browser:

```text
http://<VM_PUBLIC_IP>:3000
```

Upload a file using the web interface.

---

# Step 9: Enable Managed Identity on VM

Go to:

```text
Azure Portal → Virtual Machine → Identity → System Assigned → Enable
```

Save changes.

---

# Step 10: Assign Blob Storage Permissions

Go to:

```text
Storage Account → Access Control (IAM) → Add Role Assignment
```

Assign role:

```text
Storage Blob Data Contributor
```

Select:
- Managed Identity
- Your VM

---

# Project Structure

```text
blob-app/
│
├── app.js
├── package.json
└── node_modules/
```

---


# Author

Umair
