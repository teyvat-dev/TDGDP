/**
 * Simple helper to remove XML tags from a string
 *
 * @param str String to remove XML from
 * @returns Escaped string
 */
const removeXML = (str: string) => str.replace(/<\/?[^>]+(>|$)/g, '');

export default removeXML;
