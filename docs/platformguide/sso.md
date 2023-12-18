---
sidebar_position: 20
---

# SSO

### About SSO
Single Sign-On streamlines user access to multiple systems by allowing them to authenticate once and access various resources without repeatedly entering credentials. It balances user convenience and security, making it an essential tool for organizations seeking a seamless and secure user experience across their digital ecosystem.

Vega's SSO allows configuration using SAML and OpenID Connect v1.0 for platform admins.

![settings-sso-new-config](/img/settings-sso-new-config.png)

**SAML** (Security Assertion Markup Language) and **OpenID** are two widely used protocols in the realm of authentication and authorization for Single Sign-On (SSO) systems.

**SAML** is a mature protocol that focuses on exchanging authentication and authorization data between an identity provider (IdP) and a service provider (SP). When a user tries to access a service, the IdP generates a SAML assertion, containing the user's identity information and authentication status. This assertion is digitally signed and sent to the SP, which can then grant access based on the received information. SAML is commonly used in enterprise settings where a centralized IdP manages user identities and access to various services.

**OpenID** is designed more for user-centric scenarios, often used on the internet for user authentication. OpenID Connect (OIDC), an extension of OAuth 2.0, combines OAuth's authorization capabilities with OpenID's authentication functionalities. It allows users to log in to one website (the identity provider) and use their authenticated session to access other websites (relying parties) without sharing their credentials directly with those parties. OIDC provides a user-friendly way to authenticate users across multiple websites while maintaining their privacy and security.

## Getting Started

Starting with SAML configuration, Admin will have options to provide Metadata URL from their Identity Provider OR manually input the fields needed for configuration.
![settings-sso-SAML](/img/settings-sso-saml-config.png)

An example from Microsoft metadata would be: *https://login.microsoftonline.com/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX/federationmetadata/2007-06/federationmetadata.xml?appid=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX*

Once configured, the SSO is displayed in *Configured SSO* section.
**Note**: multiple SSOs could be configured on the platform. Navigating to the correct one will depend on the display name, an example displayed below:
![login-vegacloud](/img/login-vegacloud.png)

After successful configuration, the Redirect URI will be displayed. The Redirect URI is a crucial element in the authentication flow.
![settings-sso-saml-configured-sso](/img/settings-sso-saml-configured-sso.png)

You need to specify the Redirect URI from the page in your Service Provider application's configuration settings. This URI is where the IDP will send the user back after authentication. It's crucial that this URI is registered and matches the one you provide to the IDP. This ensures the IDP and the Service Provider can correctly exchange the authentication token.
Alternatively, you can download the Vega IDP Metadata XML and upload it to your Service Provider. 

## Finally 

If configured correctly, you should be able to click the hyperlink with the SSO display-name while logging into the platform. The flow should redirect the user through your Service Provider. Verify that the transition between applications is seamless and that you're not prompted to enter credentials repeatedly.