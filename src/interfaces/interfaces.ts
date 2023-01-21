export interface SearchBarProps {
  placeholderText: string;
}

export interface SelectBoxProps {
  regions: string[];
}

export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: string;
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: {
    svg: string;
    png: string;
  };
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }[];
  translations: {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
  };
  flag: string;
  regionalBlocs: {
    acronym: string;
    name: string;
  }[];
  cioc: string;
  independent: boolean;
}

export interface AllCountriesProps {
  countries: Country[];
}

export interface CountryType {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<never[]>>;
}

export interface CardProps {
  country: Country;
}

export interface NavBarProps {
  onToggle: () => void;
  theme: boolean;
}

export interface CountryProps {
  country: Country;
}

export interface AppContextInterface {
  countries: Country[];
  setCountries: React.Dispatch<
    React.SetStateAction<AppContextInterface | null>
  >;
}

export type PropsChildren = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};
