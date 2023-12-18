---
sidebar_position: 2
---

# AWS Integration Guide

## About the AWS Integration

Linking AWS Accounts within the Vega Platform consists of a few simple steps. The Vega Platform will automatically discover all AWS resources within the linked AWS account. 

1. Configure your Master AWS Payer Account, i.e. your billing account to allow the Vega Platform to access your billing data. This will be done using Cloudformation StackSets and our provided template CFTS.
2. Add the Master AWS Payer Account to the Vega Platform.
3. Add the AWS Accounts you would like to link to the Vega Platform
3. For each managed account, or linked account owned by the master payer account, you must configure each of the AWS Accounts to allow the Vega Platform to access your AWS resources. This will be done using Cloudformation StackSets and our provided template CFTs.

### Step 1: Configure your Master AWS Payer Account Permissions
Vega uses AWS Billing exports to provide detailed analysis and insight
into your cloud environment. This analysis includes Trending Spend
Analytics, Forecasting, Optimization Recommendations and more. Please
ensure your billing exports have been set up before deploying the Vega
AWS MPA CFT. If you need assistance setting up AWS Billing Exports,
please contact your Vega Client Success Team.

**Understanding the CFT**

The Vega AWS MPA CFT (vega-mpa-cft.yaml) is intended to give the Vega
team limited access into your AWS Master Payer Account environment. The
specific access requested in this CFT can be modified to meet each
team's level of risk aversion, but out of the box does the following:

-   Creates a role (VegaAdmin) -- which will grant the Vega team access
    to the account and sync data into the Vega ecosystem.

-   Allows read access to:

    -   Savings Plans

    -   Organizations

    -   Pricing Information

    -   Cost & Usage Reports (CURs) Definitions

    -   Cost Explorer API

    -   Billing Conductor

-   S3 access to specified billing buckets:

    -   Listing Objects

    -   Getting Objects

-   Optionally, enable FinOps actions to be taken on your behalf through
    the Vega Platform:

    -   Purchase and/or Modify Reservations

    -   Configure a Savings Plan

The Vega AWS MPA CFT includes several parameters that will need to be
defined during deployment:

-   CurBucketsParameter: A comma-separated list of S3 bucket ARNs &
    objects Vega Cloud can use to build your dashboards and
    reports.

-   ExternalId: Vega Cloud's ExternalId for your environments (helps to
    authenticate role assumption). This will be provided by your Vega
    Team.

-   AttachFinOpsPolicy: True or False with a Default of False. Attach
    the Vega FinOps policy to the Vega Cloud Admin Role? This will
    provide Vega with the ability to adjust RIs, savings plans, etc. on
    your behalf.

**Prerequisites for Deployment**

Before deploying the Vega AWS MPA CFT, it is important to ensure:

1.  AWS Hourly Cost & Usage Report (CUR) has been enabled.

2.  AWS Monthly Billing Export (TLB) has been enabled.

3.  Cost Allocation Tags have been enabled -- Please see "Enabling Cost
    Allocation Tags" for further details. Vega recommends enabling (at a
    minimum):

    a.  Environment Tags

    b.  Application Tags

    c.  Organization or Logical Business Grouping Tags

    d.  Ownership Tags

    e.  AWS Auto Scaling Group Name Tag

    f.  AWS *Created* *By* Tag

4.  The S3 bucket ARN of the buckets the AWS CUR & TLB are exported to.

Please note if you need any assistance actioning the prerequisites,
please contact your Vega representative.

**Deployment**

The following steps walk through the deployment of the Vega AWS MPA CFT
to your cloud environment.

1.  Log into your AWS Master Payer Account (MPA)

2.  Navigate to the CloudFormation Product Page:

    a.  This can be done by typing CloudFormation into the search bar at the
    top of the screen than clicking on the CloudFormation Service.


3.  On the top right of the CloudFormation Service Screen click the
    "Create stack" dropdown and select "With New resources (standard)".

4.  On the "Create stack" Page Select:

    a.  Template is Ready

    b.  Upload a template file from saved CFT Location

    c.  Click Next

5.  On the "Specify stack details" page:

    a.  Enter a stack Name: VegaMPAAccess

    b.  Enter your CUR Bucket ARN and /\* Record

        i.  This is a comma-separated field; you will need to enter the
            Bucket ARN and the Bucket ARN + "/\*" to grant us access.
            You can add other buckets using the same methodology. For
            example:

            1.  arn:aws:s3:::your-bucket, arn:aws:s3:::your-bucket/\*

        ii. Please note you can add multiple bucket & object references
            in this field.

    c.  Enter the ExternalID Provided by the Vega Team.

    d.  Enter True or False if you would like to Enable the FinOps
        Actions Policy (Default: false)

        i.  Click Next

    e.  On the Configure stack options Click Next

    f.  Review all configurations

    g.  Click the acknowledgement that AWS CloudFormation will may
        create IAM resources

    h.  Click Create Stack

    i.  A successful deployment of the stack will result in a Status of
        "CREATE\_COMPLETE" on the CloudFormation \> Stack page next to
        the name of your AWS Cloud Formation Stack Name.

    j.  After deploying, please reach out to the Vega team informing
        them of the successful deployment -- the Vega Team will verify
        access and start ingesting data.

**Enabling Cost Allocation Tags**

1.  Please navigate to the \"Cost Allocation Tags\" tab on the left hand
    side.

2.  Please ensure all of your corporation's required tags are marked as
    \"active\", if not please activate those tags.

3.  In addition to any corporate standard tags please ensure that any
    application, environment, ownership, or logical business grouping
    tags are enabled.

**If you have any questions, please contact your client success manager**

### Step 2: Add the Master AWS Payer Account to the Vega Platform
### Step 3: Add the AWS Accounts you would like to be discovered by the Vega Platform
### Step 4: Configure your Managed AWS Accounts Permissions

**Understanding the CFT**

There are two versions of our Managed AWS Account CFT:
Linked Account
Linked Account - Operate Sku (Coming soon).

The Vega AWS Linked Account CFT (vega-cft-linked.yaml) is intended to give the Vega
team limited access into your AWS Linked Accounts for resource discovery. The
specific access requested in this CFT can be modified to meet each
team's level of risk aversion, but out of the box does the following:

-   Creates a role (VegaDiscoveryReader) -- which will grant the Vega Platform access
    to the account and sync data into the Vega ecosystem.

-   Allows read access to most AWS services for resource discovery and write access to perform tag management:
    

If you have purchased the vOperate sku of the Vega Platform, you will need to deploy the Vega AWS Linked Account Operate Sku CFT (vega-cft-linked-operatesku.yaml) to your AWS Linked Accounts. 
The Vega AWS Linked Account Operate Sku CFT (vega-cft-linked-operatesku-complete.yaml) is intended to give the Vega
Platform access to not only perform discovery but also to perform FinOps actions on your behalf. The specific access requested in this CFT can be modified to meet each 
team's level of risk aversion, but out of the box does the following:
-   Creates a role (VegaDiscoveryReader) -- which will grant the Vega Platform access
    to the account and sync data into the Vega ecosystem.

-   Creates a role (VegaOperator) -- which will grant the Vega Platform access
    to the account and perform actions on your behalf such as parking/unparking resources, snapshotting disks, and rightsizing instances.

-   Allows read access to everything noted in the standard Linked Account CFT but also allows write access to perform FinOps actions:

The Vega AWS MPA CFT includes a required parameter that will need to be
defined during deployment:

-   ExternalId: Vega Cloud's ExternalId for your environments (helps to
    authenticate role assumption). This will be provided by your Vega
    Team in your welcome email.




