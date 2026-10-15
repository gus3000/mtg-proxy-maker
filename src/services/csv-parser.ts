import { CardColor, CardFrame, parseCardColor } from "../types/backgrounds";
import { Card, getEmptyCard } from "../types/card";
import { ManaType } from "../types/mana";
import { parseMana } from "./scryfall";

export type CsvLine = {
    "Nom": string;
    "Coût": string;
    "Type": string;
    "Règles": string;
    "Lore": string;
    "Puissance": string;
    "Résistance": string;
    "Image": string;
};

export function parseCsvLine(line: CsvLine): Card {
	let card = getEmptyCard();

    card.title = line.Nom;
    card.manaCost = parseMana(line["Coût"]);
    card.aspect.frame = "Creature";
    card.aspect.color = parseCardColor(card.manaCost, false, false)
    card.typeText = line.Type;
    card.oracleText = line["Règles"];
    card.flavorText = line["Lore"];
    card.power = line.Puissance;
    card.toughness = line["Résistance"];
    card.artUrl = line.Image;

    return card;
}
