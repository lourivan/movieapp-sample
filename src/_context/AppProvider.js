import React, { Component } from "react"
import Spinner from '../_util/Spinner'
import { Platform, NativeModules } from "react-native";

const AppContext = React.createContext({})

const currentLanguage = ()=>{
    let langRegionLocale
    if (Platform.OS === "android") {
      langRegionLocale = NativeModules.I18nManager.localeIdentifier || ""
    } else if (Platform.OS === "ios") {
      langRegionLocale = NativeModules.SettingsManager.settings.AppleLocale || ""
    }
    return langRegionLocale
}

export const AppConsumer = AppContext.Consumer

export class AppProvider extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading:false,
      defaultLang: null
    }
  }

  componentWillMount(){
      this.setState({
        defaultLang: currentLanguage()
      })
  }

  showProgress = () =>this.setState({loading:true})
  hideProgress = () =>this.setState({loading:false})

  render() {
    const {loading}=this.state
    const funcs = { 
      showLoader:this.showProgress,
      hideLoader:this.hideProgress,
      lang: this.state.defaultLang
    }
    return (
      <AppContext.Provider value={{...funcs}}>
        {this.props.children}
       <Spinner loading={loading} />
      </AppContext.Provider>
    )
  }
}