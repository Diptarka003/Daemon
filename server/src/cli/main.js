#!/usr/bin/env node

import dotenv from "dotenv"
import {Command} from "commander"
import figlet from "figlet"
import chalk from "chalk"
dotenv.config()
import { login, whoami, logout } from "./commands/auth/login.js"
import { wakeUp } from "./commands/ai/wakeUp.js"

async function main(){
   //Display Banner
   console.log(
    chalk.cyan(
        figlet.textSync("Daemon Cli",{
            font:"Standard",
            horizontalLayout:"default"
        })
    )
   )
   console.log(chalk.red("A cli based AI tool \n"))

   const program = new Command("daemon")
   program.version("0.0.1")
   .description("A Cli based AI tool")
   .addCommand(login)
   .addCommand(wakeUp)
   .addCommand(logout)
   .addCommand(whoami)
   program.action(()=>{
    program.help()
   })
   program.parse()
}
main().catch((err)=>{
    console.log(chalk.red("Error running Daemon CLI:", err))
    process.exit(1)
})