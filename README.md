#### This repo aim to improve your dev experience by auto generate redux 
- ACTIONS 
- REDUCER 
- DISPATCHER


### HOW TO USE

- git clone git@github.com:tsaowe/redux-cli.git
- cd redux-cli
- mkdir .redux
- touch .redux/actions.json

vim .redux/actions.json
```json
{
  "setFileStatus": ["filePath","mode"],
  "setActiveIndex": ["index","parent"],
  "openWindow": []
}

```

- node src/index.js


- cat .redux/output.js


```js
import produce from "immer"

/***************************************ACTIONS start******************************************************************/
export const ACTIONS = {
  SET_FILE_STATUS: 'REDUX-CLI@SET_FILE_STATUS',
  SET_ACTIVE_INDEX: 'REDUX-CLI@SET_ACTIVE_INDEX',
  OPEN_WINDOW: 'REDUX-CLI@OPEN_WINDOW'
};
/***************************************ACTIONS end  ******************************************************************/


/***************************************reducer start******************************************************************/
export const reducer = (state = []/*todo*/, action) =>{
  const {type} = action;
  switch (type) {
        case ACTIONS.SET_FILE_STATUS:
      const {filePath, mode} = action;
      return produce(state, draftState => {
        // todo
      });
    case ACTIONS.SET_ACTIVE_INDEX:
      const {index, parent} = action;
      return produce(state, draftState => {
        // todo
      });
    case ACTIONS.OPEN_WINDOW:
      return produce(state, draftState => {
        // todo
      });
    default:
      return state;
  }
};
/***************************************reducer end********************************************************************/


/***************************************dispatcher start***************************************************************/
export const dispatchers = {
  setFileStatus: (filePath, mode) => ({
    type: ACTIONS.setFileStatus,
    filePath,
    mode
  }),
  setActiveIndex: (index, parent) => ({
    type: ACTIONS.setActiveIndex,
    index,
    parent
  }),
  openWindow: () => ({
    type: ACTIONS.openWindow
  })
};
/***************************************dispatcher end*****************************************************************/

```
