//! Starter Kit Rust app – entry point.

fn starter_message() -> &'static str {
    "Hello from Starter Kit Rust app"
}

fn main() {
    let message: &str = starter_message();
    println!("{}", message);
}

#[cfg(test)]
mod tests {
    use super::starter_message;

    #[test]
    fn starter_message_is_stable() {
        let message = starter_message();
        assert_eq!(message, "Hello from Starter Kit Rust app");
    }
}
