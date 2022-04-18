import { Style } from '@master/style';
import { DASH, SCROLL, SNAP, TYPE } from './constants/css-property-keyword';

export class ScrollSnapType extends Style {
    static override matches = /^scroll-snap:(([xy]|block|inline|both)(;(proximity|mandatory))?)(?!;)/
    static override key = SCROLL + DASH + SNAP + DASH + TYPE;
}