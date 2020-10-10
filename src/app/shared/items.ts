import { Competition } from './competition';
import { Team } from './team';
import { Venue } from './venue';
import { Toss } from './toss';

export class Items{
    mid: number;
    title: string;
    subtitle: string;
    format: number;
    format_str: string;
    status: string; 
    status_str: string;
    status_note: string;
    verified: string;
    pre_squad: string;
    game_state: string;
    game_state_str: string;
    domestic: number;
    competition: Competition[];
    teama: Team[];
    teamb: Team[];
    date_start: Date;
    date_end: Date;
    timestamp_start: number;
    timestamp_end: number;
    venue: Venue[];
    umpires: string;
    referee: string;
    equation: string;
    live:   string;
    result: string;
    win_margin: string;
    commentary: number;
    wagon:  number;
    latest_inning_number: number;
    toss: Toss[];

}