# Memo Agility Interview

This interview consists of two problems, but you are only required to solve one of them.

Moreover, it is not required to complete all requirements, as the focus is on understanding your thought process, so do voice out your thought process while doing.

PS: UI is not the focus here, rather the functionality is the focus. However, feel free to improve when you're done.

## Problem 1: Authentication & Authorization

This problem would focus on authentication logics.

Referring to `src/pages/index.tsx`, there is a login form, and `src/pages/api/login.ts` has the API implemented. 

Requirements:

- The page `src/pages/protected.tsx` should only be accessed by logged in user
- Implement a logout function
- Bonus: Implement another page, `/guarded` where only authorized users can access.
- Bonus2: Implement a Splash screen while loading.

## Problem 2: Product Pagination

This problem focuses on the pagination of the product.

Read `src/pages/api/products.ts` to understand the response structure and what is being expected as URL.

Requirements:

- Implement a product listing page with pagination
- Bonus1: Implements name search
- Bonus2: Implements Category filter (Also requires you to fetch categories from backend)
- Super Bonus: Implements cart function

---

Note: Feel free to use any library to implement the functionalities or speed up your development.

PS: You're free to use Google, but ChatGPT should not be used.