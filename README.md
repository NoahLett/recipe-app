# CooksCabinet

CooksCabinet is a web application developed using Next.js 14, Prisma ORM, Postgresql, Redux, Tailwind CSS, and NextAuth. It provides a convenient platform for users to manage and share their favorite recipes, create shopping lists, and more.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [Recipe Submissions](#recipe-submissions)
- [Shopping Lists](#shopping-lists)
- [Search](#search)
- [Admin Privileges](#admin-privileges)

## Introduction

CooksCabinet was created out of our passion for cooking and the desire to have a centralized hub for our favorite recipes. The app allows users to dynamically create shopping lists containing all the ingredients needed for chosen recipes, providing a seamless cooking experience.

## Features

- View a diverse collection of favorite recipes with detailed ingredients and steps.
- Authenticate through Google or Github providers using NextAuth.
- Submit recipe requests for approval by the admin.
- Create, update, read, and delete personal shopping lists based on chosen recipes.
- Search for recipes by name, author, or genre (Italian, American, Sides, etc).
- Receive, read, and delete notifications on the status of recipe submissions.
- Admins can approve or deny submissions from other users.

## Tech Stack

- Next.js 14
- Prisma ORM
- Postgresql
- Redux
- Tailwind CSS
- NextAuth

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up your database and configure the connection in Prisma.
4. Run migrations using `npx prisma migrate dev`.
5. Start the Next.js development server with `npm run dev`.

## Usage

Launch the app and explore the features available. Create an account or log in using Google or Github to unlock additional functionalities.

## Authentication

CooksCabinet uses NextAuth to enable authentication through Google or Github. Simply click on the preferred provider to authenticate.

## Recipe Submissions

Authenticated users can submit recipe requests for approval by the admin. Admins can manage submissions through the admin panel.

## Shopping Lists

Create, update, read, and delete your personal shopping lists, dynamically generated from your chosen recipes.

## Search

Utilize the search functionality to find specific recipes based on name, author, or genre.

## Admin Privileges

Users with admin privileges can approve or deny recipe submissions from other users, ensuring content quality and relevance.
