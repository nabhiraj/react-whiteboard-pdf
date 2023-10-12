
class Undo{
    operationHistory=[];
    redoHistory=[];
    instance=undefined;

    static getUndoInstance(){
        if(this.instance){
            return this.instance;
        }else{
            this.instance = new Undo();
            return this.instance;
        }
    }

    

    isValidInstance(contentString) {

        if (this.operationHistory.length > 0) {
            if (this.operationHistory[this.operationHistory.length - 1] == contentString) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }
    
    addHistory(newContent) {
        newContent = JSON.stringify(newContent);
        if (this.isValidInstance(newContent)) {
            this.operationHistory.push(newContent);
            console.error('now undo stack looks like this',this.operationHistory.length);
        }else{
            //console.error('not adding layer in the undo stack');
            //empty
        }
    }

    getLastObject(){
        this.operationHistory.pop();
        let res=this.operationHistory.pop();
        return res;
    }

}

export default Undo;