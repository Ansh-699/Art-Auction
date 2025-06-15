const endpoints = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
  },
  offer: {
    create: "/offers",
    update: "/offers",
    delete: "/offers/delete",
    status: "/offers/status",
    get: "/offers",
    getAll: "/offers/all",
  },
  contract: {
    get: "/contracts",
    create: "/contracts/create",
    getDetail: "/contracts/detail",
    updatePassword: "/contracts/update_password",
    updateContractAcceptStatus: "/contracts/update_contract_accept_status",
  },
  users: {
    get: "/users",
    update: "/users/update",
    password: "/users/password",
  },
  inheritance: {
    create: "/inheritances/create",
    createWallet: "/inheritances/createwallet",
    get: "/inheritances",
    getBeneficiaries: "/inheritances/beneficiaries",
  },
};

export default endpoints;
