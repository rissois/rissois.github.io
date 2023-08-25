import { TORTE } from "./Torte"
import { VEXILLOGRAPHY } from "./Vexillography";

import FigmaIcon from './Figma';
import { PHOTOGRAPHY } from "./Photography";
import { ACADEMIC } from "./Academic";

export const CARDS = [
  { name: 'Torte', key: 'torte', uri: 'Torte.jpeg', brief: 'The guest-centric restaurant point-of-sales' },
  { name: 'MuseAR (Figma)', uri: 'MuseAR.png', brief: 'Experience museums with augmented reality', link: 'https://www.figma.com/proto/0rVrFyt664ucXRY9L2iY8F/Muse?type=design&node-id=1-2&t=bjHZ0tAAHJikovgU-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design', Icon: FigmaIcon, },
  { name: 'Academic figures', key: 'academic', uri: 'Academic.png', brief: 'A collection of scientific illustrations' },
  { name: 'Vexillography', key: 'vexillography', uri: 'Flags.png', brief: 'The design of flags' },
  { name: 'Photography', key: 'photography', uri: 'Photography.jpeg', brief: 'Some favorite photos from my travels' },
]

export const DETAILS = {
  torte: TORTE,
  vexillography: VEXILLOGRAPHY,
  photography: PHOTOGRAPHY,
  academic: ACADEMIC,
}