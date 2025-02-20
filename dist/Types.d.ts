/// <reference types="react" />
interface CommonPlaidLinkOptions {
    logLevel?: LinkLogLevel;
    extras?: Record<string, any>;
}
export declare type LinkTokenConfiguration = (CommonPlaidLinkOptions & {
    token: string;
});
export declare type LinkPublicKeyConfiguration = (CommonPlaidLinkOptions & {
    token?: string;
    publicKey?: string;
    clientName: string;
    environment: PlaidEnvironment;
    products: Array<PlaidProduct>;
    language: string;
    countryCodes: Array<string>;
    webhook?: string;
    userLegalName?: string;
    userEmailAddress?: string;
    userPhoneNumber?: string;
    linkCustomizationName?: string;
    accountSubtypes?: Array<LinkAccountSubtype>;
    oauthConfiguration?: OAuthConfiguration;
});
export interface OAuthConfiguration {
    nonce?: string;
    redirectUri?: string;
}
export declare enum LinkLogLevel {
    DEBUG = "debug",
    INFO = "info",
    WARN = "warn",
    ERROR = "error"
}
export declare enum PlaidEnvironment {
    PRODUCTION = "production",
    DEVELOPMENT = "development",
    SANDBOX = "sandbox"
}
export declare enum PlaidProduct {
    ASSETS = "assets",
    AUTH = "auth",
    DEPOSIT_SWITCH = "deposit_switch",
    IDENTITY = "identity",
    INCOME = "income",
    INVESTMENTS = "investments",
    LIABILITIES = "liabilities",
    LIABILITIES_REPORT = "liabilities_report",
    PAYMENT_INITIATION = "payment_initiation",
    TRANSACTIONS = "transactions"
}
declare enum LinkAccountType {
    CREDIT = "credit",
    DEPOSITORY = "depository",
    INVESTMENT = "investment",
    LOAN = "loan",
    OTHER = "other"
}
export interface LinkAccountSubtype {
}
export declare class LinkAccountSubtypeCredit implements LinkAccountSubtype {
    readonly type: LinkAccountType;
    readonly subtype: LinkAccountSubtype;
    static readonly ALL: LinkAccountSubtypeCredit;
    static readonly CREDIT_CARD: LinkAccountSubtypeCredit;
    static readonly PAYPAL: LinkAccountSubtypeCredit;
    private constructor();
}
export declare class LinkAccountSubtypeDepository implements LinkAccountSubtype {
    readonly type: LinkAccountType;
    readonly subtype: LinkAccountSubtype;
    static readonly ALL: LinkAccountSubtypeDepository;
    static readonly CASH_MANAGEMENT: LinkAccountSubtypeDepository;
    static readonly CD: LinkAccountSubtypeDepository;
    static readonly CHECKING: LinkAccountSubtypeDepository;
    static readonly EBT: LinkAccountSubtypeDepository;
    static readonly HSA: LinkAccountSubtypeDepository;
    static readonly MONEY_MARKET: LinkAccountSubtypeDepository;
    static readonly PAYPAL: LinkAccountSubtypeDepository;
    static readonly PREPAID: LinkAccountSubtypeDepository;
    static readonly SAVINGS: LinkAccountSubtypeDepository;
    private constructor();
}
export declare class LinkAccountSubtypeInvestment implements LinkAccountSubtype {
    readonly type: LinkAccountType;
    readonly subtype: LinkAccountSubtype;
    static readonly ALL: LinkAccountSubtypeInvestment;
    static readonly BROKERAGE: LinkAccountSubtypeInvestment;
    static readonly CASH_ISA: LinkAccountSubtypeInvestment;
    static readonly EDUCATION_SAVINGS_ACCOUNT: LinkAccountSubtypeInvestment;
    static readonly FIXED_ANNUNITY: LinkAccountSubtypeInvestment;
    static readonly GIC: LinkAccountSubtypeInvestment;
    static readonly HEALTH_REIMBURSEMENT_ARRANGEMENT: LinkAccountSubtypeInvestment;
    static readonly HSA: LinkAccountSubtypeInvestment;
    static readonly INVESTMENT_401A: LinkAccountSubtypeInvestment;
    static readonly INVESTMENT_401K: LinkAccountSubtypeInvestment;
    static readonly INVESTMENT_403B: LinkAccountSubtypeInvestment;
    static readonly INVESTMENT_457B: LinkAccountSubtypeInvestment;
    static readonly INVESTMENT_529: LinkAccountSubtypeInvestment;
    static readonly IRA: LinkAccountSubtypeInvestment;
    static readonly ISA: LinkAccountSubtypeInvestment;
    static readonly KEOGH: LinkAccountSubtypeInvestment;
    static readonly LIF: LinkAccountSubtypeInvestment;
    static readonly LIRA: LinkAccountSubtypeInvestment;
    static readonly LRIF: LinkAccountSubtypeInvestment;
    static readonly LRSP: LinkAccountSubtypeInvestment;
    static readonly MUTUAL_FUND: LinkAccountSubtypeInvestment;
    static readonly NON_TAXABLE_BROKERAGE_ACCOUNT: LinkAccountSubtypeInvestment;
    static readonly PENSION: LinkAccountSubtypeInvestment;
    static readonly PLAN: LinkAccountSubtypeInvestment;
    static readonly PRIF: LinkAccountSubtypeInvestment;
    static readonly PROFIT_SHARING_PLAN: LinkAccountSubtypeInvestment;
    static readonly RDSP: LinkAccountSubtypeInvestment;
    static readonly RESP: LinkAccountSubtypeInvestment;
    static readonly RETIREMENT: LinkAccountSubtypeInvestment;
    static readonly RLIF: LinkAccountSubtypeInvestment;
    static readonly ROTH: LinkAccountSubtypeInvestment;
    static readonly ROTH_401K: LinkAccountSubtypeInvestment;
    static readonly RRIF: LinkAccountSubtypeInvestment;
    static readonly RRSP: LinkAccountSubtypeInvestment;
    static readonly SARSEP: LinkAccountSubtypeInvestment;
    static readonly SEP_IRA: LinkAccountSubtypeInvestment;
    static readonly SIMPLE_IRA: LinkAccountSubtypeInvestment;
    static readonly SIIP: LinkAccountSubtypeInvestment;
    static readonly STOCK_PLAN: LinkAccountSubtypeInvestment;
    static readonly TFSA: LinkAccountSubtypeInvestment;
    static readonly THRIFT_SAVINGS_PLAN: LinkAccountSubtypeInvestment;
    static readonly TRUST: LinkAccountSubtypeInvestment;
    static readonly UGMA: LinkAccountSubtypeInvestment;
    static readonly UTMA: LinkAccountSubtypeInvestment;
    static readonly VARIABLE_ANNUITY: LinkAccountSubtypeInvestment;
    private constructor();
}
export declare class LinkAccountSubtypeLoan implements LinkAccountSubtype {
    readonly type: LinkAccountType;
    readonly subtype: LinkAccountSubtype;
    static readonly ALL: LinkAccountSubtypeLoan;
    static readonly AUTO: LinkAccountSubtypeLoan;
    static readonly BUSINESS: LinkAccountSubtypeLoan;
    static readonly COMMERCIAL: LinkAccountSubtypeLoan;
    static readonly CONSTRUCTION: LinkAccountSubtypeLoan;
    static readonly CONSUMER: LinkAccountSubtypeLoan;
    static readonly HOME_EQUITY: LinkAccountSubtypeLoan;
    static readonly LINE_OF_CREDIT: LinkAccountSubtypeLoan;
    static readonly LOAN: LinkAccountSubtypeLoan;
    static readonly MORTGAGE: LinkAccountSubtypeLoan;
    static readonly OVERDRAFT: LinkAccountSubtypeLoan;
    static readonly STUDENT: LinkAccountSubtypeLoan;
    private constructor();
}
export declare class LinkAccountSubtypeUnknown implements LinkAccountSubtype {
    readonly type: string;
    readonly subtype: string;
    constructor(type: string, subtype: string);
}
export interface LinkSuccess {
    publicToken: string;
    metadata: LinkSuccessMetadata;
}
export interface LinkSuccessMetadata {
    institution?: LinkInstitution;
    accounts: LinkAccount[];
    linkSessionId: string;
    metadataJson?: string;
}
export interface LinkAccount {
    id: string;
    name?: string;
    mask?: string;
    type: LinkAccountType;
    subtype: LinkAccountSubtype;
    verificationStatus?: LinkAccountVerificationStatus;
}
export declare enum LinkAccountVerificationStatus {
    PENDING_AUTOMATIC_VERIFICATION = "pending_automatic_verification",
    PENDING_MANUAL_VERIFICATION = "pending_manual_verification",
    MANUALLY_VERIFIED = "manually_verified"
}
export interface LinkInstitution {
    id: string;
    name: string;
}
export interface LinkExit {
    error?: LinkError;
    metadata: LinkExitMetadata;
}
export interface LinkExitMetadata {
    status?: LinkExitMetadataStatus;
    institution?: LinkInstitution;
    linkSessionId: string;
    requestId: string;
    metadataJson?: string;
}
export declare enum LinkExitMetadataStatus {
    CONNECTED = "connected",
    CHOOSE_DEVICE = "choose_device",
    REQUIRES_CODE = "requires_code",
    REQUIRES_CREDENTIALS = "requires_credentials",
    REQUIRES_EXTERNAL_ACTION = "requires_external_action",
    REQUIRES_OAUTH = "requires_oauth",
    REQUIRES_QUESTIONS = "requires_questions",
    REQUIRES_RECAPTCHA = "requires_recaptcha",
    REQUIRES_SELECTIONS = "requires_selections",
    REQUIRES_DEPOSIT_SWITCH_ALLOCATION_CONFIGURATION = "requires_deposit_switch_allocation_configuration",
    REQUIRES_DEPOSIT_SWITCH_ALLOCATION_SELECTION = "requires_deposit_switch_allocation_selection"
}
export interface LinkError {
    errorCode: LinkErrorCode;
    errorType: LinkErrorType;
    errorMessage: string;
    /** @deprecated DO NOT USE, data not guaranteed. Use `displayMessage` instead */
    errorDisplayMessage?: string;
    displayMessage?: string;
    errorJson?: string;
}
export declare enum LinkErrorCode {
    INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
    INVALID_MFA = "INVALID_MFA",
    ITEM_LOGIN_REQUIRED = "ITEM_LOGIN_REQUIRED",
    INSUFFICIENT_CREDENTIALS = "INSUFFICIENT_CREDENTIALS",
    ITEM_LOCKED = "ITEM_LOCKED",
    USER_SETUP_REQUIRED = "USER_SETUP_REQUIRED",
    MFA_NOT_SUPPORTED = "MFA_NOT_SUPPORTED",
    INVALID_SEND_METHOD = "INVALID_SEND_METHOD",
    NO_ACCOUNTS = "NO_ACCOUNTS",
    ITEM_NOT_SUPPORTED = "ITEM_NOT_SUPPORTED",
    INVALD_UPDATED_USERNAME = "INVALD_UPDATED_USERNAME",
    INVALID_UPDATED_USERNAME = "INVALID_UPDATED_USERNAME",
    ITEM_NO_ERROR = "ITEM_NO_ERROR",
    item_no_error = "item-no-error",
    NO_AUTH_ACCOUNTS = "NO_AUTH_ACCOUNTS",
    NO_INVESTMENT_ACCOUNTS = "NO_INVESTMENT_ACCOUNTS",
    NO_INVESTMENT_AUTH_ACCOUNTS = "NO_INVESTMENT_AUTH_ACCOUNTS",
    NO_LIABILITY_ACCOUNTS = "NO_LIABILITY_ACCOUNTS",
    PRODUCTS_NOT_SUPPORTED = "PRODUCTS_NOT_SUPPORTED",
    ITEM_NOT_FOUND = "ITEM_NOT_FOUND",
    ITEM_PRODUCT_NOT_READY = "ITEM_PRODUCT_NOT_READY",
    INSTITUTION_DOWN = "INSTITUTION_DOWN",
    INSTITUTION_NOT_RESPONDING = "INSTITUTION_NOT_RESPONDING",
    INSTITUTION_NOT_AVAILABLE = "INSTITUTION_NOT_AVAILABLE",
    INSTITUTION_NO_LONGER_SUPPORTED = "INSTITUTION_NO_LONGER_SUPPORTED",
    INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
    PLANNED_MAINTENANCE = "PLANNED_MAINTENANCE",
    PRODUCT_NOT_ENABLED = "PRODUCT_NOT_ENABLED",
    DATA_UNAVAILABLE = "DATA_UNAVAILABLE",
    ASSET_PRODUCT_NOT_READY = "ASSET_PRODUCT_NOT_READY",
    ASSET_REPORT_GENERATION_FAILED = "ASSET_REPORT_GENERATION_FAILED",
    INVALID_PARENT = "INVALID_PARENT",
    INSIGHTS_NOT_ENABLED = "INSIGHTS_NOT_ENABLED",
    INSIGHTS_PREVIOUSLY_NOT_ENABLED = "INSIGHTS_PREVIOUSLY_NOT_ENABLED",
    BANK_TRANSFER_LIMIT_EXCEEDED = "BANK_TRANSFER_LIMIT_EXCEEDED",
    BANK_TRANSFER_MISSING_ORIGINATION_ACCOUNT = "BANK_TRANSFER_MISSING_ORIGINATION_ACCOUNT",
    BANK_TRANSFER_INVALID_ORIGINATION_ACCOUNT = "BANK_TRANSFER_INVALID_ORIGINATION_ACCOUNT",
    BANK_TRANSFER_ACCOUNT_BLOCKED = "BANK_TRANSFER_ACCOUNT_BLOCKED",
    BANK_TRANSFER_INSUFFICIENT_FUNDS = "BANK_TRANSFER_INSUFFICIENT_FUNDS",
    BANK_TRANSFER_NOT_CANCELLABLE = "BANK_TRANSFER_NOT_CANCELLABLE",
    BANK_TRANSFER_UNSUPPORTED_ACCOUNT_TYPE = "BANK_TRANSFER_UNSUPPORTED_ACCOUNT_TYPE",
    BANK_TRANSFER_UNSUPPORTED_ENVIRONMENT = "BANK_TRANSFER_UNSUPPORTED_ENVIRONMENT",
    SANDBOX_PRODUCT_NOT_ENABLED = "SANDBOX_PRODUCT_NOT_ENABLED",
    SANDBOX_WEBHOOK_INVALID = "SANDBOX_WEBHOOK_INVALID",
    SANDBOX_BANK_TRANSFER_EVENT_TRANSITION_INVALID = "SANDBOX_BANK_TRANSFER_EVENT_TRANSITION_INVALID",
    MISSING_FIELDS = "MISSING_FIELDS",
    UNKNOWN_FIELDS = "UNKNOWN_FIELDS",
    INVALID_FIELD = "INVALID_FIELD",
    INCOMPATIBLE_API_VERSION = "INCOMPATIBLE_API_VERSION",
    INVALID_BODY = "INVALID_BODY",
    INVALID_HEADERS = "INVALID_HEADERS",
    NOT_FOUND = "NOT_FOUND",
    NO_LONGER_AVAILABLE = "NO_LONGER_AVAILABLE",
    SANDBOX_ONLY = "SANDBOX_ONLY",
    INVALID_ACCOUNT_NUMBER = "INVALID_ACCOUNT_NUMBER",
    INCORRECT_DEPOSIT_AMOUNTS = "INCORRECT_DEPOSIT_AMOUNTS",
    UNAUTHORIZED_ENVIRONMENT = "UNAUTHORIZED_ENVIRONMENT",
    INVALID_PRODUCT = "INVALID_PRODUCT",
    UNAUTHORIZED_ROUTE_ACCESS = "UNAUTHORIZED_ROUTE_ACCESS",
    DIRECT_INTEGRATION_NOT_ENABLED = "DIRECT_INTEGRATION_NOT_ENABLED",
    INVALID_API_KEYS = "INVALID_API_KEYS",
    INVALID_ACCESS_TOKEN = "INVALID_ACCESS_TOKEN",
    INVALID_PUBLIC_TOKEN = "INVALID_PUBLIC_TOKEN",
    INVALID_LINK_TOKEN = "INVALID_LINK_TOKEN",
    INVALID_PROCESSOR_TOKEN = "INVALID_PROCESSOR_TOKEN",
    INVALID_AUDIT_COPY_TOKEN = "INVALID_AUDIT_COPY_TOKEN",
    INVALID_ACCOUNT_ID = "INVALID_ACCOUNT_ID",
    PLAID_DIRECT_ITEM_IMPORT_RETURNED_INVALID_MFA = "PLAID_DIRECT_ITEM_IMPORT_RETURNED_INVALID_MFA",
    ACCOUNTS_LIMIT = "ACCOUNTS_LIMIT",
    ADDITION_LIMIT = "ADDITION_LIMIT",
    AUTH_LIMIT = "AUTH_LIMIT",
    BALANCE_LIMIT = "BALANCE_LIMIT",
    IDENTITY_LIMIT = "IDENTITY_LIMIT",
    ITEM_GET_LIMIT = "ITEM_GET_LIMIT",
    RATE_LIMIT = "RATE_LIMIT",
    TRANSACTIONS_LIMIT = "TRANSACTIONS_LIMIT",
    RECAPTCHA_REQUIRED = "RECAPTCHA_REQUIRED",
    RECAPTCHA_BAD = "RECAPTCHA_BAD",
    INCORRECT_OAUTH_NONCE = "INCORRECT_OAUTH_NONCE",
    OAUTH_STATE_ID_ALREADY_PROCESSED = "OAUTH_STATE_ID_ALREADY_PROCESSED"
}
export declare enum LinkErrorType {
    BANK_TRANSFER = "BANK_TRANSFER_ERROR",
    INVALID_REQUEST = "INVALID_REQUEST",
    INVALID_RESULT = "INVALID_RESULT",
    INVALID_INPUT = "INVALID_INPUT",
    INSTITUTION_ERROR = "INSTITUTION_ERROR",
    RATE_LIMIT_EXCEEDED = "RATE_LIMIT_EXCEEDED",
    API_ERROR = "API_ERROR",
    ITEM_ERROR = "ITEM_ERROR",
    AUTH_ERROR = "AUTH_ERROR",
    ASSET_REPORT_ERROR = "ASSET_REPORT_ERROR",
    SANDBOX_ERROR = "SANDBOX_ERROR",
    RECAPTCHA_ERROR = "RECAPTCHA_ERROR",
    OAUTH_ERROR = "OAUTH_ERROR"
}
export declare type LinkEventListener = (linkEvent: LinkEvent) => void;
export interface LinkEvent {
    eventName: LinkEventName;
    metadata: LinkEventMetadata;
}
export interface LinkEventMetadata {
    linkSessionId: string;
    mfaType?: string;
    requestId?: string;
    viewName: LinkEventViewName;
    errorCode?: string;
    errorMessage?: string;
    errorType?: string;
    exitStatus?: string;
    institutionId?: string;
    institutionName?: string;
    institutionSearchQuery?: string;
    timestamp: string;
}
export declare enum LinkEventName {
    CLOSE_OAUTH = "CLOSE_OAUTH",
    ERROR = "ERROR",
    EXIT = "EXIT",
    FAIL_OAUTH = "FAIL_OAUTH",
    HANDOFF = "HANDOFF",
    MATCHED_CONSENT = "MATCHED_CONSENT",
    MATCHED_SELECT_INSTITUTION = "MATCHED_SELECT_INSTITUTION",
    MATCHED_SELECT_VERIFY_METHOD = "MATCHED_SELECT_VERIFY_METHOD",
    OPEN = "OPEN",
    OPEN_MY_PLAID = "OPEN_MY_PLAID",
    OPEN_OAUTH = "OPEN_OAUTH",
    SEARCH_INSTITUTION = "SEARCH_INSTITUTION",
    SELECT_INSTITUTION = "SELECT_INSTITUTION",
    SUBMIT_CREDENTIALS = "SUBMIT_CREDENTIALS",
    SUBMIT_MFA = "SUBMIT_MFA",
    TRANSITION_VIEW = "TRANSITION_VIEW"
}
export declare enum LinkEventViewName {
    CONNECTED = "CONNECTED",
    CONSENT = "CONSENT",
    CREDENTIAL = "CREDENTIAL",
    ERROR = "ERROR",
    EXIT = "EXIT",
    LOADING = "LOADING",
    MATCHED_CONSENT = "MATCHED_CONSENT",
    MATCHED_CREDENTIAL = "MATCHED_CREDENTIAL",
    MATCHED_MFA = "MATCHED_MFA",
    MFA = "MFA",
    NUMBERS = "NUMBERS",
    RECAPTCHA = "RECAPTCHA",
    SELECT_ACCOUNT = "SELECT_ACCOUNT",
    SELECT_INSTITUTION = "SELECT_INSTITUTION"
}
export declare type LinkSuccessListener = (LinkSuccess: LinkSuccess) => void;
export declare type LinkExitListener = (LinkExit: LinkExit) => void;
export declare type PlaidLinkConfiguration = LinkTokenConfiguration | LinkPublicKeyConfiguration;
export interface PlaidLinkProps {
    tokenConfig?: LinkTokenConfiguration;
    publicKeyConfig?: LinkPublicKeyConfiguration;
    onSuccess: LinkSuccessListener;
    onExit?: LinkExitListener;
}
export declare type PlaidLinkComponentProps = (PlaidLinkProps & {
    children: React.ReactNode;
});
export {};
