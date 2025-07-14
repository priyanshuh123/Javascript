const user = {
    name: "Priyanshu"
};

const descriptor = Object.getOwnPropertyDescriptor(user,"name");
console.log(descriptor);