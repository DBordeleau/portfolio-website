"use client";

import React, { useState, useRef, useEffect } from 'react';
import { FaTerminal, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalProps {
    isVisible: boolean;
    onCloseAction: () => void;
}

type CommandHistory = {
    command: string;
    output: string;
};

export default function Terminal({ isVisible, onCloseAction }: TerminalProps) {
    const [input, setInput] = useState('');
    const [commandHistory, setCommandHistory] = useState<CommandHistory[]>([]);
    const [cursorVisible, setCursorVisible] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isVisible && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isVisible]);

    // Blinking cursor effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [commandHistory]);

    function generateMatrixEffect() {
        let output = "";
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < 15; i++) {
            let line = "";
            for (let j = 0; j < 40; j++) {
                line += chars[Math.floor(Math.random() * chars.length)];
            }
            output += `<span style="color: ${i % 2 === 0 ? '#0f0' : '#0a0'};">${line}</span>\n`;
        }
        return output;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!input.trim()) return;

        let output = '';
        const command = input.trim().toLowerCase();

        switch (command) {
            case 'help':
                output = 'Just kidding! This is a ~secret~ terminal. Go hunting for your own commands! Though maybe if you asked nicely...';
                break;
            case 'please help':
            case 'please':
            case 'help please':
                output = 'Since you asked nicely, here are some commands you can try:\n' +
                    "• clear - Clears terminal commands\n" +
                    "• exit - Quits terminal\n" +
                    "• ascii - Show ASCII art\n" +
                    "• joke - Tell a programming joke\n" +
                    "• flip - Flip a coin\n" +
                    "• rps - Play Rock, Paper, Scissors\n" +
                    "• fortune - Open a tech themed fortune cookie\n" +
                    "• adventure - Start a mini text based adventure!\n" +
                    "\n...and a few hidden commands for you to discover!";
                break;
            case 'clear':
                setCommandHistory([]);
                setInput('');
                return;
            case 'exit':
                onCloseAction();
                return;
            case 'matrix':
                output = generateMatrixEffect();
                break;
            case 'cam':
                output = 'theman3245';
                break;
            case 'fortune':
                const fortunes = [
                    "Your code will compile on the first try today.",
                    "A new project opportunity will present itself soon.",
                    "The bug you've been hunting is in a file you haven't looked at yet.",
                    "The perfect solution to a nagging problem is just around the corner...",
                    "Someone will merge your pull request without requesting changes.",
                    "Your next deployment will go smoothly without any rollbacks.",
                    "A forgotten API will solve your current nightmare.",
                ];
                output = `🥠 ${fortunes[Math.floor(Math.random() * fortunes.length)]}`;
                break;
            case 'adventure':
                output = `
                You find yourself in a dark dungeon. Escape. There are doors to the NORTH, EAST, and WEST.\n
                Type 'go [direction]' to move.`;
                if (typeof window !== 'undefined') {
                    sessionStorage.setItem('adventureRoom', 'start');
                    sessionStorage.setItem('doorSolved', 'false');
                }
                break;

            case command.match(/^go (north|east|south|west)$/)?.input:
                if (typeof window !== 'undefined') {
                    const currentRoom = sessionStorage.getItem('adventureRoom') || '';
                    const direction = command.split(' ')[1].toLowerCase();
                    const doorSolved = sessionStorage.getItem('doorSolved') === 'true';

                    if (!currentRoom) {
                        output = "You need to start an adventure first! Type 'adventure' to begin.";
                    } else if (currentRoom === 'start') {
                        if (direction === 'north') {
                            output = "You enter a library filled with ancient books. There's a lectern with a book open in the center of the room. There's a door to the SOUTH.";
                            sessionStorage.setItem('adventureRoom', 'library');
                        } else if (direction === 'east') {
                            output = "You find a massive stone door with no handles or any obvious way to open it. Strange glyphs are carved into its surface. There's a passage back WEST.";
                            sessionStorage.setItem('adventureRoom', 'door');
                        } else if (direction === 'west') {
                            output = "You find a treasure chest! It contains a portfolio website. There's a door to the EAST.";
                            sessionStorage.setItem('adventureRoom', 'treasure');
                        } else {
                            output = "You can't go that way.";
                        }
                    } else if (currentRoom === 'library') {
                        if (direction === 'south') {
                            output = "You return to the dark room. There are doors to the NORTH, EAST, and WEST.";
                            sessionStorage.setItem('adventureRoom', 'start');
                        } else {
                            output = "You can't go that way.";
                        }
                    } else if (currentRoom === 'door') {
                        if (direction === 'west') {
                            output = "You return to the dark room. There are doors to the NORTH, EAST, and WEST.";
                            sessionStorage.setItem('adventureRoom', 'start');
                        } else {
                            output = "You can't go that way.";
                        }
                    } else if (currentRoom === 'treasure') {
                        if (direction === 'east') {
                            output = "You return to the dark room. There are doors to the NORTH, EAST, and WEST.";
                            sessionStorage.setItem('adventureRoom', 'start');
                        } else {
                            output = "You can't go that way.";
                        }
                    } else if (currentRoom === 'exit' && doorSolved) {
                        output = "You've already escaped! Type 'adventure' to start a new game.";
                        sessionStorage.removeItem('adventureRoom');
                        sessionStorage.removeItem('doorSolved');
                    }
                } else {
                    output = "You need to start an adventure first! Type 'adventure' to begin.";
                }
                break;

            case 'read':
            case 'book':
                if (typeof window !== 'undefined' && sessionStorage.getItem('adventureRoom') === 'library') {
                    output = `You find an open book on a lectern, the passage reads:
                
                "To open the path, just think with care—
                The password's cold, and fills the air.
                It falls from clouds, both day and night,
                It's soft, it's white, and pure delight."`;
                } else {
                    output = "There's nothing to read here.";
                }
                break;

            case 'door':
            case 'open':
            case 'open door':
                if (typeof window !== 'undefined' && sessionStorage.getItem('adventureRoom') === 'door') {
                    output = "As you approach the door, several glyphs on its surface light up and the door begins to hum. \"Speak the password: \"";
                    sessionStorage.setItem('waitingForPassword', 'true');
                } else {
                    output = "There's no door to open here.";
                }
                break;

            case 'snow':
                if (typeof window !== 'undefined' &&
                    sessionStorage.getItem('adventureRoom') === 'door' &&
                    sessionStorage.getItem('waitingForPassword') === 'true') {
                    output = `<span class="text-yellow-300">The glyphs on the door glow brightly as you speak the word. With a rumbling sound, the massive stone door slides open, revealing a pathway to freedom.</span>
                
                Congratulations! You've escaped the adventure.`;
                    sessionStorage.setItem('doorSolved', 'true');
                    sessionStorage.setItem('adventureRoom', 'exit');
                    sessionStorage.removeItem('waitingForPassword');
                } else if (typeof window !== 'undefined' && sessionStorage.getItem('waitingForPassword') === 'true') {
                    output = "Nothing happens. That doesn't seem to be the correct password.";
                } else {
                    output = "It's not snowing here.";
                }
                break;
            case 'ascii':
                output = "Available ASCII art: 'cat', 'dog', 'sloth', 'rabbit', 'bat', 'beaver', 'dolphin', \nUsage: ascii [option]";
                break;
            case 'ascii cat':
                output = ` 
                     /\\_/\\  
                    ( o.o ) 
                     > ^ <  `;
                break;
            case 'ascii sloth':
                output = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⡀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣤⠤⠴⠖⠚⠛⠉⠉⠉⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⢰⣸⣶⣇⠀⢰⣿⣿⣷⣤⠤⠴⠖⠒⠛⠉⠉⠁⠀⠀⠀⠀⠀⠀⣀⣀⣤⠤⠶⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣰⣴⣇⠀⢰⣾⣿⣄⣼⡿⠿⢿⡟⠛⠉⠉⠁⠀⠀⠀⠀⠀⠀⣀⣀⣠⠤⠤⠖⠚⠛⠉⠉⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⢾⣿⠽⢼⡛⠋⠉⠉⠁⢸⠀⠀⠈⢻⣄⣀⣠⠤⠤⣶⠒⠚⠋⢉⣉⣠⣤⠤⠤⠤⣤⣀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠟⠋⠉⠉⠀⠀⣾⠃⠀⠈⢻⣀⣠⠤⢤⣿⠀⠀⠀⠀⢿⡇⠀⢀⣤⡿⠗⠒⢚⣏⠉⠱⡄⠀⠀⠀⢸⠈⠙⠲⣄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣤⣀⣀⡤⠤⠶⡿⠀⠀⠀⠀⣿⠀⠀⠀⢿⠀⠀⠀⠀⠘⣇⣴⠃⠀⠻⢤⡸⣿⡿⠏⢀⡿⠀⠀⢠⣏⡀⠀⠀⠈⢷⡀⠀⠀
⠀⠀⠀⠀⠀⠀⠉⠁⠀⠀⠀⢰⡇⠀⠀⠀⠀⠸⡆⠀⠀⢸⡁⠀⠀⠀⠀⢹⡏⠀⠀⠀⣰⣿⣗⠓⠒⠛⠀⠀⠀⠀⠀⠉⠓⢦⡀⠀⢳⡄⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⢳⠒⠒⢙⡇⠀⠀⠀⠀⠀⣧⠀⠀⠀⢿⣧⣽⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⡀⠀⢷⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠈⠁⠀⠘⠃⠀⠀⠀⠀⠀⢻⡀⠀⠀⠈⠛⠛⠀⣠⠞⡉⠉⠳⣄⠀⠀⠀⠀⠀⢳⠀⠘⡇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣧⠀⠀⠀⠀⠀⢠⠇⣴⣿⣷⠀⠸⡆⠀⠀⠀⠀⢸⠀⠀⡇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣆⠀⠀⠀⠀⢸⡄⠉⠋⠉⠀⠀⢷⠀⠀⠀⠀⣸⠀⢠⡇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣆⠀⠀⠀⡼⠁⠀⠀⠀⠀⠀⢸⠀⠀⠀⣰⠃⠀⡼⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⡀⢀⠇⠀⠀⠀⠀⠀⠀⣸⠀⣠⠞⠁⠀⡼⠃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠾⣄⣀⡀⢀⣀⣀⡠⠷⠚⠁⠀⣠⠞⠁⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠁⠀⠀⠀⢀⣠⠞⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⠖⠋⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⠴⠒⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠒⠲⠤⠤⠤⠤⠤⠤⠦⠶⠖⠚⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    `;
                break;
            case 'ascii rabbit':
                output = `
                      /|      __
*             +      / |   ,-~ /             +
     .              Y :|  //  /                .         *
         .          | jj /( .^     *
               *    >-"~"-v"              .        *        .
*                  /       Y
   .     .        jo  o    |     .            +
                 ( ~T~     j                     +     .
      +           >._-' _./         +
               /| ;-"~ _  l
  .           / l/ ,-"~    \\     +
              \\//\\/      .- \\
       +       Y        /    Y
               l       I     !
               ]\\      _\\    /"\\
              (" ~----( ~   Y.  )
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
    `;
                break;
            case 'ascii dolphin':
                output = `
                                                  __
                                               _.-~  )
                                    _..--~~~~,'   ,-/     _
                                 .-'. . . .'   ,-','    ,' )
                               ,'. . . _   ,--~,-'__..-'  ,'
                             ,'. . .  (@)' ---~~~~      ,'
                            /. . . . '~~             ,-'
                           /. . . . .             ,-'
                          ; . . . .  - .        ,'
                         : . . . .       _     /
                        . . . . .          \`-.:
                       . . . ./  - .          )
                      .  . . |  _____..---.._/ 
                ~---~~~~----~~~~             ~~
                    `;
                break;
            case 'ascii bat':
                output = `
                   /\\                 /\\
                  / \\\'._   (\\_/)   _.'/ \\
                 /_.''._'--('.')--'_.''._\\
                 | \\_ / \`;=/ " \\=;\` \\ _/ |
                  \\/ \`\\__|\`\\___/\`|__/\`  \\/
                          \\(/|\\)/       
                           " \` "
                    `;
                break;
            case 'ascii beaver':
                output = ` 
                             ___
                          .="   "=._.---.
                        ."         c ' Y'\`p
                       /   ,       \`.  w_/
                       |   '-.   /     / 
                 _,..._|      )_-\\ \\_=.\\
                \`-....-'\`------)))\`=-'"\`'"
                    `;
                break;
            case 'ascii dog':
                output = ` 
                       _=,_
                    o_/6 /#\\
                    \\__ |##/
                    ='|--\\        o  
                    /   #'-.     /
                    \\#|_   _'-. /
                        |/ \\_( # |" 
                       C/ ,--___/    
                `;
                break;
            case 'flip':
                output = Math.random() > 0.5 ? "Heads" : "Tails";
                break;
            case 'sudo':
                output = "You have no power here.";
                break;
            case 'joke':
                const jokes = [
                    "Why do Java developers wear glasses? Because they don't C#!",
                    "How many programmers does it take to change a light bulb? None, it's a hardware problem.",
                    "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
                    "What's a programmer's favorite place to grab a drink? The Foo Bar.",
                    "A programmer goes to the shop to buy some milk. His wife calls and says \"While you're out, get some eggs.\" and he never returns.",
                    "I have a joke about UDP, but you might not get it.",
                    ` There are only 10 types of people in this world:

    1. Those with no understanding of hexidecimals
    2. Those with almost no understanding of hexidecimals
    3. Those with a very basic understanding of hexidecimals
    4. Those with a mediocre understanding of hexidecimals
    5. Those with below average understanding of hexidecimals
    6. Those with an average understanding of hexidecimals
    7. Those with above average understanding of hexidecimals
    8. Those with a decent understanding of hexidecimals
    9. Those with a pretty good understanding of hexidecimals
        A. Those with a great understanding of hexidecimals
        B. Those with an excellent understanding of hexidecimals
        C. Those with a fantastic understanding of hexidecimals
        D. Those with a stupendous understanding of hexidecimals
        E. Those with a masterful understanding of hexidecimals
        F. Those with an unreal understanding of hexidecimals
        10 . Those with a godlike understanding of hexidecimals`,
                    `<span class="text-red-500">404: Joke not found.</span>
        
<span class="text-gray-400">JokeError: Failed to fetch joke from humor database
  at fetchRandomJoke (brain.js:42)
  at generateHumor (terminal.tsx:69)
  at processCommand (terminal.tsx:94)
  at handleSubmit (terminal.tsx:127)
  at Function.executeUserCode (universe.js:infinite)
  
Technical details:
- Humor module not found
- Coffee levels critically low
- Try again after developer has had more sleep</span>`
                ];
                const laughEmojis = ["😂", "🤣", "😆", "😄", "😅", "🙃", "😹", "🤪", "😝", "😊", "😎"];

                const randomEmoji = laughEmojis[Math.floor(Math.random() * laughEmojis.length)];

                const selectedJoke = jokes[Math.floor(Math.random() * jokes.length)];

                if (selectedJoke.includes("<span")) {
                    output = selectedJoke;
                } else {
                    output = selectedJoke + " " + randomEmoji;
                }
                break;
            case 'rps':
                output = "Let's play Rock, Paper, Scissors!\n" +
                    "Type 'rock', 'paper', or 'scissors' to play.";
                break;

            case 'rock':
            case 'paper':
            case 'scissors': {
                const rpsOptions = ["rock", "paper", "scissors"];
                const computerChoice = rpsOptions[Math.floor(Math.random() * rpsOptions.length)];
                let gameResult;

                if (command === computerChoice) {
                    gameResult = "It's a tie!";
                } else if (
                    (command === "rock" && computerChoice === "scissors") ||
                    (command === "paper" && computerChoice === "rock") ||
                    (command === "scissors" && computerChoice === "paper")
                ) {
                    gameResult = "You win!";
                } else {
                    gameResult = "You lose!";
                }

                output = `You chose ${command}, computer chose ${computerChoice}.\n${gameResult}`;
                break;
            }
            default:
                output = `Command not found: ${command}. Type 'help' for available commands.`;
        }

        setCommandHistory(prev => [...prev, { command: input, output }]);
        setInput('');
    };

    const handleTerminalClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="w-full max-w-3xl h-[32rem] bg-gray-900 rounded-lg shadow-2xl overflow-hidden"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.5 }}
                    >
                        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" onClick={onCloseAction}></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="ml-2 text-gray-300 flex items-center">
                                    <FaTerminal className="mr-2" /> terminal
                                </span>
                            </div>
                            <button
                                onClick={onCloseAction}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <div
                            className="h-[calc(100%-44px)] overflow-auto p-4 font-mono text-sm text-green-400 bg-gray-900"
                            ref={terminalRef}
                            onClick={handleTerminalClick}
                        >
                            <div className="mb-4">
                                <p className="text-yellow-300">Woah! You found my secret terminal! 🚀</p>
                                <p>Type 'help' to see available commands.</p>
                                <p className="text-gray-500 text-xs mt-1">v1.0.0</p>
                            </div>

                            {commandHistory.map((item, index) => (
                                <div key={index} className="mb-2">
                                    <div className="flex">
                                        <span className="text-blue-400 mr-2">guest@dillons-portfolio:~$</span>
                                        <span className="text-white">{item.command}</span>
                                    </div>
                                    <div
                                        className="pl-4 mt-1 whitespace-pre-wrap"
                                        dangerouslySetInnerHTML={{ __html: item.output }}
                                    />
                                </div>
                            ))}

                            <form onSubmit={handleSubmit} className="flex items-center mt-2">
                                <span className="text-blue-400 mr-2">guest@dillons-portfolio:~$</span>
                                <div className="flex-1 relative">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        className="w-full bg-transparent outline-none text-white"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        autoFocus
                                    />
                                    {input.length === 0 && (
                                        <span
                                            className="absolute top-0 left-0 h-full w-2 bg-green-400"
                                            style={{ opacity: cursorVisible ? 1 : 0 }}
                                        ></span>
                                    )}
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}