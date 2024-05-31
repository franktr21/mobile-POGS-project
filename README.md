# POGS App

## Overview

The POGS app is a React Native application designed to provide users with an easy and intuitive way to select and order fresh vegetables and fruits. The app features a user-friendly interface, complete with images and interactive elements, allowing users to build a shopping cart of their desired produce items and calculate the total cost of their order.

## Features

- **Picker for Vegetables and Fruits**: Users can select their desired vegetables and fruits from a picker menu, which displays available options along with their prices.
- **Quantity Selection**: For each selected item, users can choose the quantity they wish to purchase.
- **Add to Cart Functionality**: Users can add their selected items and quantities to a shopping cart with a single click.
- **Total Cost Calculation**: The app calculates and displays the total cost of all items in the cart.
- **User-Friendly Interface**: The app features a clean and visually appealing design, with easy-to-read text and buttons.

## Technology Stack

- **React Native**: The framework used to build the app, providing a smooth and responsive user experience.
- **State Management**: Utilizes React's `useState` hook for managing the state of selected items, quantities, the shopping cart, and the total cost.
- **Picker Component**: The `@react-native-picker/picker` library is used for the dropdown selection of items and quantities.

## User Interface

- **Welcome Text**: A welcoming message at the top of the screen introduces the app to the users.
- **Image Display**: An image is displayed below the welcome text, adding a visual appeal to the app.
- **Selectors**: Dropdown pickers for selecting vegetables, fruits, and their quantities.
- **Add Button**: A button to add the selected items and quantities to the cart.
- **Calculate Button**: A button to calculate the total cost of the items in the cart.
- **Total Cost Display**: The total cost is displayed prominently at the bottom of the screen.

## Code Structure

### Main Component (`App`)

The main component is responsible for rendering the entire user interface. It manages the state for the selected items, quantities, the shopping cart, and the total cost. The main sections include:

- **State Management**: Manages the state using React's `useState` hook.
- **Vegetable and Fruit Selection**: Uses the `Picker` component for users to select vegetables and fruits and their quantities.
- **Add to Cart**: A function to add the selected items to the shopping cart.
- **Calculate Total**: A function to calculate the total cost of the items in the cart.

### Styles

The app uses `StyleSheet` from React Native to define styles for various components, ensuring a consistent and visually appealing layout. Key style definitions include:

- **Container Styles**: Define the overall layout and background colors.
- **Text Styles**: Define the appearance of the text, including font size, color, and alignment.
- **Button Styles**: Define the appearance of the buttons, including background color, padding, and border radius.
- **Image Styles**: Define the size and appearance of the image.

## Conclusion

The POGS app provides a convenient and attractive way for users to select and order fresh produce. With its user-friendly interface and smooth functionality, it aims to enhance the shopping experience for users looking to buy fresh vegetables and fruits.
