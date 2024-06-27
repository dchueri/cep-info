extern crate csv;
extern crate serde;

use std::fs::File;
use std::io::prelude::*;
use std::io::BufReader;

#[no_mangle]
pub extern "C" fn get_cep_info(cep_ptr: *const i8) -> *const i8 {
    let c_str = unsafe {
        assert!(!cep_ptr.is_null());
        std::ffi::CStr::from_ptr(cep_ptr)
    };

    let str_slice = c_str.to_str().expect("Invalid UTF-8 string");

    if let Ok(file) = File::open("./ceps.csv") {
        let reader = BufReader::new(file);
        for line in reader.lines() {
            if let Ok(record) = line {
                let fields: Vec<&str> = record.split(';').collect();

                if fields.len() >= 2 && fields[0] == str_slice {
                    return std::ffi::CString::new(fields[3])
                        .expect("Failed to create CString")
                        .into_raw();
                }
            }
        }
    }

    std::ffi::CString::new("NOT_FOUND")
        .expect("Failed to create CString")
        .into_raw()
}
