---
sidebar_position: 3
---

# Azure Integration Guide
Vega requires access to your Azure subscriptions to query the Cost and Usage Metric APIs. When you use a 3rd-party software application with your Azure Subscription, you need to create an application registration.  This registration is the first step of the process in allowing an Azure Subscription to be imported into the Vega Platform.

**Note**: the following can be applied at Management Group levels to simplify deployment across large numbers of subscriptions.

## New App Registration: Add Vega to Subscription
        
- Log into your Azure Portal (https://portal.azure.com/).
- Select "**Azure Active Directory**".
- Once you're on the Active Directory Screen, select “**App Registrations**” from the left navigation menu.
- On the App Registration Screen, click the “**+ New registration**” on the far left of the top navigation bar. You will have to enter a Name, we suggest “**VegaAzureApp**”. 
- Select the Supported account type of “**Accounts in the organizational directory only” – single tenant.**
- Next select your Redirect URI, this should be “**Single-page application (SPA)**” with a URL = “**https://portal.vegacloud.io/azureauth**”. 
- Once all these values are provided, select “**Register**” and you've finished creating the Vega Azure App.

## New Custom Role: Give Vega Permissions
        
Now that we have an application registration, we need to control the amount of access we grant to the application.  This is done by creating a limiting custom role in the subscription you are importing into Vega.  

- From the Azure home screen, select “**Subscriptions**”. Then select the subscription being imported.
- Select “**Access control (IAM)"** from the left side navigation menu.
- Select “+ Add” from the top navigation menu and select “**Add custom role**”
- Once the modal opens, fill in “**Basics**” tab information.  Create a Custom role name, we recommend “**VegaAppAccess**” 
- Add a Description that helps understand what the role is used for, “**Vega Platform Access Role**”. For your Baseline permissions, select “**Start from Scratch**”.
- Select "Next" to move on to the "Permissions" tab. We will leave this tab as is. Select "Next" to move onto the "Assignable scopes" tab. We will also leave this tab as is. Select "**Next**" to land on the "**JSON**" tab and click “**Edit**”
- You need to update the default Azure Role permissions block with the JSON permissions provided to you by Vega (see below). Click "**Save**", then "**Next**".
- On the "Review + create" tab, click "**Create**" and you have finished creating a custom role.

## Assign Custom Role: Give App Registration Permissions
        
Now that we have both the new App Registration and new Custom Role, we can give the application the subscription access required by the Vega Application.  This is the last step in the import of an Azure Subscription. First thing you have to do is select the subscription that you are importing.  This is done from the “**Azure Home Screen**”. 

- Select “**Subscriptions**”, then select the specific subscription being imported. Select “**Access control (IAM)**" from the left side navigation menu.
- Select “**+ Add**” from the top navigation menu, then select “**Add  role assignment**”.
- Select your role “**Vega Access**”.  Leave the default for “**Assign access to**”.
- **Select your app registration**, you need to do this by typing the name “**VegaAzureApp**”, or just “Vega” will also bring up your selection to select. Click “**Save**”. 
- Now you should see your Vega Access Role assigned to your VegaAzureApp Application Registration.

Vega should now be able to work with this subscription and your Vega team will confirm ingestion is ready to begin.

## Appendix
### Discovery-Only Role JSON 
```
[
    "Microsoft.Consumption/reservationRecommendationDetails/read",
    "Microsoft.Consumption/reservationRecommendations/read",
    "Microsoft.Resources/subscriptions/read",
    "Microsoft.Resources/subscriptions/resourceGroups/read",
    "Microsoft.Resources/subscriptions/resourceGroups/read",
    "Microsoft.Compute/virtualMachines/read",
    "Microsoft.Compute/virtualMachines/instanceView/read",
    "Microsoft.Compute/disks/read",
    "Microsoft.Compute/availabilitySets/read",
    "Microsoft.Compute/snapshots/read",
    "Microsoft.Network/virtualNetworks/read",
    "Microsoft.Network/loadBalancers/read",
    "Microsoft.Network/networkInterfaces/read",
    "Microsoft.Network/publicIPAddresses/read",
    "Microsoft.Network/routeTables/read",
    "Microsoft.Network/networkSecurityGroups/read",
    "Microsoft.Network/virtualNetworks/subnets/read",
    "Microsoft.DBforMariaDB/servers/read",
    "Microsoft.DBforPostgreSQL/servers/read",
    "Microsoft.Sql/servers/read",
    "Microsoft.Sql/servers/databases/read",
    "Microsoft.Sql/servers/elasticPools/read",
    "Microsoft.DBforMySQL/servers/read",
    "Microsoft.Storage/storageAccounts/read",
    "Microsoft.Insights/metrics/read",
    "Microsoft.Insights/metricDefinitions/read",
    "Microsoft.Commerce/*/read",
    "Microsoft.Cache/redis/read",
    "Microsoft.DocumentDB/databaseAccounts/services/read",
    "Microsoft.Web/staticSites/Read",
    "Microsoft.Web/kubeEnvironments/read",
    "Microsoft.Kubernetes/connectedClusters/Read",
    "Microsoft.Kubernetes/RegisteredSubscriptions/read",
    "Microsoft.DataProtection/backupVaults/read",
    "Microsoft.DocumentDB/cassandraClusters/read",
    "Microsoft.DocumentDB/cassandraClusters/dataCenters/read",
    "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/read",
    "Microsoft.DesktopVirtualization/applicationgroups/read",
    "Microsoft.DesktopVirtualization/hostpools/read",
    "Microsoft.DesktopVirtualization/workspaces/read",
    "Microsoft.Cache/redis/read",
    "Microsoft.DocumentDB/databaseAccounts/services/read",
    "Microsoft.Web/staticSites/Read",
    "Microsoft.Web/kubeEnvironments/read",
    "Microsoft.Kubernetes/connectedClusters/Read",
    "Microsoft.Kubernetes/RegisteredSubscriptions/read",
    "Microsoft.DataProtection/backupVaults/read",
    "Microsoft.DataProtection/backupVaults/*/read",
    "Microsoft.RecoveryServices/*/read",
    "Microsoft.DocumentDB/cassandraClusters/read",
    "Microsoft.DocumentDB/cassandraClusters/dataCenters/read",
    "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/read",
    "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/*/read",
    "Microsoft.DesktopVirtualization/applicationgroups/read",
    "Microsoft.DesktopVirtualization/applicationgroups/*/read",
    "Microsoft.DesktopVirtualization/hostpools/read",
    "Microsoft.DesktopVirtualization/hostpools/*/read",
    "Microsoft.DesktopVirtualization/workspaces/read",
    "Microsoft.DesktopVirtualization/workspaces/*/read",
    "*/read"
  ]
```
