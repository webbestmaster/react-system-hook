import {getSavedLocaleName, saveLocaleName} from './locale-context-helper';
import {LocaleNameEnum} from './locale-context-type';
import {createLocalization} from './localization/localization';
import {LangKeyType} from './translation/type';
import {allLocalesData} from './locale-context-const';
import {LocalizationStateType} from './localization/localization-type';

const {LocalizationProvider, Locale, useLocale} = createLocalization<LangKeyType, LocaleNameEnum>({
    defaultLocaleName: getSavedLocaleName<LocaleNameEnum>(Object.values(LocaleNameEnum)),
    localization: allLocalesData,
    onUseEffect: (localizationProviderState: LocalizationStateType<LocaleNameEnum>) => {
        const {localeName} = localizationProviderState;

        saveLocaleName<LocaleNameEnum>(localeName);
    },
});

export {Locale, useLocale, LocalizationProvider};
