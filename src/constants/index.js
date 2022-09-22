/**
 * mock 手动开关
 */
const MOCK_MANUAL_SWITCH = false;
export const MOCK_ENABLE = DEPLOY_ENV === 'master' ? false : MOCK_MANUAL_SWITCH;
