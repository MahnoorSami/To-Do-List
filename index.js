import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    const { addTodo } = await inquirer.prompt([
        {
            type: "input",
            name: "addTodo",
            message: "What do you want to add to your todo list?",
        },
    ]);
    todos.push(addTodo);
    console.log(`Your todo list: ${todos}`);
    const { continuePrompt } = await inquirer.prompt([
        {
            type: "confirm",
            name: "continuePrompt",
            message: "Do you want to add more todos?",
        },
    ]);
    condition = continuePrompt;
}
console.log("All todos added!");
