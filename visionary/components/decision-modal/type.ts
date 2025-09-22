type Option<T> = {
  label: string;
  key: keyof T;
};


type OnboardingGroup = {
  email: string;
  licenseType: 'paid' | 'view' | 'guest';
  browserLanguage: string;
  invitedTeamIds: string[];
};

type OnboardingProject = {
  teamId: string;
  projectTemplate: string;
  projectName: string;
};
type CustomWelcomeScreen = {
  title: string;
  message: string;
  logo: string;
};

type CustomStartScreen = {
  label: 'Default' | 'Onboarding project' | 'Team page' | 'Another Asana page' | 'Home';
  value: string;
};

type OnboardingFlow = {
  name: string;
  teamMemberships?: string;
  hasOnboardingProject: boolean;
  hasCustomWelcomeScreen: boolean;
  onboardingGroup: OnboardingGroup | null;
  onboardingProject: OnboardingProject | null;
  customWelcomeScreen: CustomWelcomeScreen | null;
  customStartScreen: CustomStartScreen;
};

export const DefaultOnboardingFlow: OnboardingFlow = {
  name: '',
  hasOnboardingProject: false,
  hasCustomWelcomeScreen: false,
  customStartScreen: {
    label: 'Default',
    value: '',
  },
  onboardingGroup: null,
  onboardingProject: null,
  customWelcomeScreen: null,
}

const OnboardingGroupOptions: Option<OnboardingGroup>[] = [
  { label: 'Email domain target', key: 'email' },
  { label: 'License type target', key: 'licenseType' },
  { label: 'Language target', key: 'browserLanguage' },
];

const OnboardingProjectOptions: Option<OnboardingProject>[] = [
  { label: 'Team', key: 'teamId' },
  { label: 'Project template', key: 'projectTemplate' },
  { label: 'Project name', key: 'projectName' },
];

const CustomWelcomeScreenOptions: Option<CustomWelcomeScreen>[] = [
  { label: 'Has title', key: 'title' },
  { label: 'Has message', key: 'message' },
  { label: 'Has logo', key: 'logo' },
];

const CustomStartScreenOptions: Option<CustomStartScreen>[] = [
  { label: 'Team', key: 'label' },
  { label: 'Project', key: 'value' },
];

const teamMemberShipsOptions: Option<{ teamMemberships: string }>[] = [
  { label: 'Team(s)', key: 'teamMemberships' },
];

export const OptionsMap: {
  onboardingGroup: Option<OnboardingGroup>[];
  onboardingProject: Option<OnboardingProject>[];
  customWelcomeScreen: Option<CustomWelcomeScreen>[];
  customStartScreen: Option<CustomStartScreen>[];
  teamMemberships: Option<{ teamMemberships: string }>[];
} = {
  onboardingGroup: OnboardingGroupOptions,
  onboardingProject: OnboardingProjectOptions,
  customWelcomeScreen: CustomWelcomeScreenOptions,
  customStartScreen: CustomStartScreenOptions,
  teamMemberships: teamMemberShipsOptions,
};

export type OptionsMapKey = keyof typeof OptionsMap;

export const getOptionsFor = (decisionKey: OptionsMapKey) => {
  return OptionsMap[decisionKey];
}

export default OnboardingFlow;