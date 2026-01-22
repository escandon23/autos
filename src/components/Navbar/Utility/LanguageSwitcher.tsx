import Flag from 'react-world-flags'
import type { ReactNode } from 'react'

interface LanguageOption {
    code : string,
    label : string,
    flagIcon? : ReactNode
}

const LanguageSelector = () => {

    const currentLanguage : LanguageOption =  {
        code : "ENG",
        label : "English",
        flagIcon :  <Flag code="GB" height="16"/>

    }
    return (
        <div>
             <button className='flex items-center gap-1'>{currentLanguage.flagIcon} {currentLanguage.code}</button>
        </div>
    )
}

export default LanguageSelector