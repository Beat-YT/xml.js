interface options {
    /**
     * 
     * Example:
     *  @link https://github.com/kripken/xml.js/blob/master/test/test.xsd
     */
	xml: string | string[],

    /**
     * 
     * Example:
     *  @link https://github.com/kripken/xml.js/blob/master/test/test.xml
     */
	schema: string | string[]

    /**
     * 
     * @description This branch adds an optional field
     * to the options given to the validateXML function.
     * If the user adds a field format with the content rng,
     * then the argument used will be `--relaxng` instead of
     * --schema. Otherwise `--schema` is used
     * 
     * @link https://github.com/kripken/xml.js/pull/29
     */
    format?: 'rng';

    /**
     * 
     * see 
     *  @link https://github.com/kripken/xml.js/pull/16
     */
    TOTAL_MEMORY?: any;
}

interface result {
    errors?: string[]
}

export var validateXML : (Options: options) => result;
