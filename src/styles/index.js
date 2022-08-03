// if *.scss is white listed, these files wont be shaken off even if they're unused
export { default as HeaderStyle } from './Header.module.scss';
export { default as MainStyle } from './Main.module.scss';
// meyerReset isn't a side effect in relation to this module because we are explicitly 
// importing the name space
// However, in the context of another module, the contents of meyerReset would be considered side effects OF this module.
// So *.js files must be white listed in package.json for meyerReset to take effect, not *.css.
export * from './meyerReset.css';