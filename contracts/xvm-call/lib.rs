#![cfg_attr(not(feature = "std"), no_std, no_main)]

const EVM_ID: u8 = 0x0F;

#[ink::contract(env = xvm_environment::XvmDefaultEnvironment)]
mod xvm_call {
    use ink::prelude::vec::Vec;

    #[ink(storage)]
    pub struct XvmCall {}

    impl XvmCall {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self {}
        }

        #[ink(message)]
        pub fn call_selector(&self, evm_address: [u8; 20], selector: [u8; 4]) -> bool {
            self.env()
                .extension()
                .xvm_call(
                    super::EVM_ID,
                    Vec::from(evm_address.as_ref()),
                    selector.to_vec(),
                )
                .is_ok()
        }
    }
}
