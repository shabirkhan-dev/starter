//! Starter Kit Rust app – entry point.

fn starter_message() -> &'static str {
    "Hello from Starter Kit Rust app"
}

fn main() {
    println!("{}", starter_message());
}

#[cfg(test)]
mod tests {
    use super::starter_message;

    #[test]
    fn starter_message_is_stable() {
        assert_eq!(starter_message(), "Hello from Starter Kit Rust app");
    }
}
