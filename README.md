# Yogacarya-website-for-yoga-trainer
# Yoga Trainer Platform - README

Welcome to the Yoga Trainer Platform! This platform allows yoga instructors/trainers to showcase their services and make them available to customers on the web. Customers can explore different yoga trainers, their services, and book sessions online.

## Technologies Used
- Frontend: React.js
- Backend: Node.js
- Database: MySQL + ORM (Object-Relational Mapping)
- Architecture: MVC (Model-View-Controller)

## Features

### Trainer Login & Signup
Trainers can sign up with the platform by providing their details such as picture, name, address, location, and languages they are proficient in. They will need to create an account to access the full functionality of the platform.

### List & Create Services
Trainers can list their various services like Yoga, Meditation, etc. along with their respective prices and available time slots for different days. This information will be visible to the customers.

### Trainer Approval
Trainers need to upload certificates for the services they are authorized to train in. The admin will review these certificates and approve the trainer's services. Once approved, the trainer's services will be listed on the platform.

### Guest User Navigation
Guest users (customers) can navigate through the platform and explore the different services offered by various trainers. They can select a trainer and book a session based on their preferences.

### Booking Management
Trainers can view their bookings and either approve or reject them. Upon approval, a Zoom link will be generated and sent to the customer. If the booking is rejected or needs to be rescheduled, emails will be triggered to inform the customer.

### Vacation Days
Trainers can mark vacation days and temporarily stop taking bookings for specific days when they are unavailable.

## How to Contribute

### If you are a collaborator:

To contribute to the Yoga Trainer Platform, please follow these steps:

1. Clone the repository to your local development environment using the following command:
   ```
   git clone <repo-url>
    ```
2. Create a new branch for your contributions. Choose a meaningful branch name related to the feature or bug fix you will be working on.
    ```
    git checkout -b my-feature-branch
    ```
3. Make the necessary changes and additions to the codebase.
4. Commit your changes with a descriptive commit message:
    ```
    git commit -m "Add new feature: ..."
    ```
5. Push your changes to the repository:
    ```
    git push origin my-feature-branch
    ```


###If you are not a collaborator:

We welcome contributions to the Yoga Trainer Platform! To contribute, please follow these steps:

1. Fork the repository by clicking on the "Fork" button on the top right corner of this repository page.

2. Clone the forked repository to your local development environment using the following command:
   ```
   git clone <forked-repository-url>
   ```

3. Create a new branch for your contributions. Choose a meaningful branch name related to the feature or bug fix you will be working on.
   ```
   git checkout -b my-feature-branch
   ```

4. Make the necessary changes and additions to the codebase.

5. Commit your changes with a descriptive commit message:
   ```
   git commit -m "Add new feature: ..."
   ```

6. Push your changes to your forked repository:
   ```
   git push origin my-feature-branch
   ```

7. Create a pull request (PR) by navigating to the original repository and clicking on the "New Pull Request" button. Fill in the details about your changes and submit the PR for review.

8. Your PR will be reviewed, and any feedback or changes needed will be communicated through the PR conversation.

9. Once the PR is approved, your changes will be merged into the main repository.

Thank you for contributing to the Yoga Trainer Platform!

---
Please note that the above README is a general guide for the project. Depending on your project's specific needs and additional features you plan to include, you may want to tailor the README accordingly. Additionally, it's a good practice to include information on setting up the development environment, running tests, and any other relevant details for contributors in the README.
