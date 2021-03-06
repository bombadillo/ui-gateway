# ui-gateway

A registry for UI components

![Diagram](/README_DIAGRAM.jpg)

# Pros

- Consumers only need to communicate with the gateway and not each provider
- Auth logic is reduced to one request instead of authing with each provider
- Structured format for UI component consumption
  - Providers have to meet the spec for providing UI components
- Central location for all UI components

# Cons

- Providers need to keep the gateway up to date with their latest components

# Consumer

- Requires registration with gateway
- Is granted access to certain providers
  - Granular access within each provider should be available
- Can request a specific type of UI component to be consumed
  - e.g. flat HTML, web component, JS bundle
- Auth is limited to the gateway

## Registration

- Authorisation to UI components are agreed
- Consumers have one to many relationship with provider UI components
- Relationship could be stored as follows:

| **ConsumerComponent** |
| --------------------- |
| ConsumerId            |
| ProviderId            |
| ProviderComponentId   |
| Token                 |

# Provider

- Requires registration with gateway
- Has endpoint(s) that returns a UI component
  - Ideally has multiple formats
    - e.g. flat HTML, web component, JS bundle
- Auth is limited to the gateway

## Registration

- Basic details are stored

| **Provider** |
| ------------ |
| Id           |
| Name         |

- A providers UI components are set:

| **ProviderComponent** |
| --------------------- |
| Id                    |
| ProviderId            |
| Name                  |
| URL                   |
| ComponentType         |

- ComponentType is flat HTML, web component, etc

# Install

- `yarn install`

# Run

- `yarn run`

# Required apps

These apps are required to demonstrate the consumer retrieving UI components from multiple providers

## Providers

- https://github.com/JasonHughes94/ui-provider-angular
- https://github.com/JasonHughes94/ui-provider-web-component
- https://github.com/bombadillo/ui-provider-react
- https://github.com/bombadillo/ui-provider-html

## Consumers

- https://github.com/bombadillo/ui-client-dotnetcore
