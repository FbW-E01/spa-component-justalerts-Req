# BOXES!

Again browse the files of this repository and take note of how this project is set out.

Let's make some boxes!

When using JSX you have all of the Javascript functionalities available: Variables, Loops, Conditionals, etc.

This exercise uses Booooootstrap! For example, the following code renders a standard blue alert box --> [bootstrap alert](https://getbootstrap.com/docs/4.0/components/alerts/#examples)

```jsx
<div className={`alert alert-primary`} role="alert">
  This is a box - check it out!
</div>
```

Knowing this, your task is to implement the `Box` component.

- Look at index.js and take note of how the `Box` should be used and use that as a guide on how to implement it
- Given the sample usage in index.js, the browser should show three differnet boxes on the page
- The Box should print one of these: a red alert box, an orange warning box or a blue primary box
- Figure out how to console.log all properties that are defined for the Box
- If the box has a "hide" property, do not print anything
- Do not create new JavaScript files :)