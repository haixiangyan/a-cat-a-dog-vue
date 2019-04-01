# a-cat-a-dog-vue

A Vue App for showing cats 🐱 and dogs 🐶.

[Click here to view the demo](https://haixiang6123.github.io/a-cat-a-dog-vue/#/)

## Screenshot

![](https://i.loli.net/2019/04/01/5ca195a9b8681.png)

## How to use

### Before running it
Before running it, you need to add a file `secret.js` to 
the directory `/src/axios`. So, it would be `/src/axios/secret.js`.

Then place following codes in it.

```typescript
export const catKey = 'APPLY THE KEY ON https://thecatapi.com/'
export const dogKey = 'APPLY THE KEY ON https://thedogapi.com/'
```

For those 2 keys, you need to sign up in [thecatapi.com](https://thecatapi.com/) and [thedogapi.com](https://thedogapi.com/).

### Now run it

Now, enter following commands to run it :)
```bash
$ cd a-cat-a-dog-react

$ yarn install

$ yarn start
```

## Stacks

* [Vue](https://vuejs.org/)
* [Vue Router](https://router.vuejs.org/)
* [Vuex](https://vuex.vuejs.org/)
* [Element UI](http://element.eleme.io/#/en-US)
* [Axios](https://github.com/axios/axios)
