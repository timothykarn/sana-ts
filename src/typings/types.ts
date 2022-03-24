import {Permissions, Role} from "discord.js";

export type Arg = {
    name: string
    value: string | RegExp | string[];
    required?: boolean;
    global: boolean;
}

export type CommandType = {
    name: string;
    category: string;
    aliases?: [];
    cooldown?: number; //in ms
    args?: Arg[];
    permissionsNeeded?: Permissions[];
    rolesNeeded?: Role[];
    permissibleBy?: Permissions[];
    subCommands?: CommandType[];
    execute?: Function;
}