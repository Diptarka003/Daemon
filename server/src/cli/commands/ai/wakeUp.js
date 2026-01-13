import { Command } from "commander";
import yoctoSpinner from "yocto-spinner";
import chalk from "chalk";
import { prisma } from "../../../../generated/prisma";
import { select } from "@clack/prompts";
import {getStoredToken} from ""

const wakeUpAction=async()=>{
    const token= await getStoredToken()
    if(!token.access_token)
    {
        console.log(chalk.red("Not Authenticated. Please Login"))
        return
    }

    const spinner= yoctoSpinner({text:"Fetching user information..."})
    spinner.start()

    const user= await prisma.user.findFirst({
        where:{
            sessions:{
                token: token.access_token
            }
        },
        select:{
            id:true,
            name:true,
            email:true,
            image:true
        }
    })
    spinner.stop()
    if(!user)
    {
        console.log(chalk.red("No user found"))
    }
    console.log(chalk.green(`Welcome back ${user.name}\n`))

    const choice = await select({
    message: "Select an Option:",
    options: [
        {
        value: "chat",
        label: "Chat",
        hint: "Simple chat with AI",
        },
        {
        value: "tool",
        label: "Tool Calling",
        hint: "Chat with tools (Google Search, Code Execution)",
        },
        {
        value: "agent",
        label: "Agentic Mode",
        hint: "Advanced AI agent (Coming soon)",
        },
    ],
    })
    switch(choice){
    case "chat":
        console.log("Chat is selected")
        break;
    case "tool":
        console.log(chalk.green("Tool calling is selected"))
        break;
    case "agent":
        console.log(chalk.yellow("Agentic mode coming soon"))
        break;
    }

}
export const wakeUp= new Command("wakeup")
.description("Wakeup the ai")
.action(wakeUpAction)

