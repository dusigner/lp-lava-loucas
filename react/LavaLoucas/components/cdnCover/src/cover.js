import { Config }  from 'brastemp.utils';

export default (imageURL, size) => Config.cover.replace("$MEDIDAS", size) + imageURL