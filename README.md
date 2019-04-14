# This repo aim to speed up your dev by auto generate three basic redux components 
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
export const reducer = (state = []/*todo*/, action) => {
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
  SET_FILE_STATUS: (filePath, mode) => ({
    type: ACTIONS.SET_FILE_STATUS,
    filePath,
    mode
  }),
  SET_ACTIVE_INDEX: (index, parent) => ({
    type: ACTIONS.SET_ACTIVE_INDEX,
    index,
    parent
  }),
  OPEN_WINDOW: () => ({
    type: ACTIONS.OPEN_WINDOW
  })
};
/***************************************dispatcher end*****************************************************************/
```


I use [immer](https://github.com/mweststrate/immer) as my immutable state tool, but you can use your own immutable~ enjoy


Any feature or suggestion please [submit an issue](https://github.com/tsaowe/redux-cli/issues) 
