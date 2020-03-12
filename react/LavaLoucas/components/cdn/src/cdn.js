import { Config }  from 'brastemp.utils';
export default (imageURL,operation,dimension) =>{
    if(!imageURL){
        return ""
    }
    if(!operation){
        return Config.cdn + imageURL
    }else{
        return Config.cdnOperation.replace("$OPERATION",operation).replace("$MEDIDAS", dimension) + imageURL
    }
}


