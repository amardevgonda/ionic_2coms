# 2Coms

## Description

2coms is a prototype mobile application built with the Ionic framework. It demonstrates basic functionality and UI/UX principles relevant to its intended use case. 
The app includes a home screen with a list of items and a details screen that shows the details of a selected item.
It also utilizes the Geolocation plugin to fetch the user's current location.

## Features

- Home screen displaying a list of items fetched from a local JSON file.
- Details screen showing the details of a selected item.
- Geolocation feature to get the user's current location.
- Basic error handling for data fetching and geolocation.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Install the Geolocation plugin:
    ```bash
    npm install @capacitor/geolocation
    ```

4. Sync the project with Capacitor:
    ```bash
    npx cap sync
    ```

## Running the App

To run the app in the browser, use the following command:

```bash
ionic serve
