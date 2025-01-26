use crate::MIDError;
use std::{ffi::OsStr, process::Command};

#[macro_export]
macro_rules! debug {
    ($($arg:tt)*) => {
        if cfg!(debug_assertions) {
            println!($($arg)*);
        }
    };
}

#[cfg(target_os = "linux")]
pub fn run_shell_comand<I, S>(command: &str, args: I) -> Result<String, MIDError>
where
    I: IntoIterator<Item = S>,
    S: AsRef<OsStr>,
{
    let output = Command::new(command).args(args).output()?;
    if !output.status.success() {
        return Err(MIDError::ExecuteProcessError(std::io::Error::new(
            std::io::ErrorKind::Other,
            "Command execution failed"
        )));
    }
    Ok(String::from_utf8_lossy(&output.stdout).to_string())
}
