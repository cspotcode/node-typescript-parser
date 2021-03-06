import { Clonable } from './clonable/Clonable';

/**
 * Class for symbols that are contained in a named import or export or anywhere. Basically an aliased object.
 * (i.e. import {SYMBOL} from '...').
 * 
 * @export
 * @class SymbolSpecifier
 * @implements {Clonable}
 */
export class SymbolSpecifier implements Clonable<SymbolSpecifier> {
    constructor(public specifier: string, public alias?: string) { }

    /**
     * Clones the current resolve specifier and returns a new instance with the same properties.
     * 
     * @returns {SymbolSpecifier}
     * 
     * @memberof SymbolSpecifier
     */
    public clone(): SymbolSpecifier {
        return new SymbolSpecifier(this.specifier, this.alias);
    }
}
