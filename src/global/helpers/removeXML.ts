const removeXML = (str: string) => str.replace(/<\/?[^>]+(>|$)/g, '');

export default removeXML;
