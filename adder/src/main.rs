use add_lib1;

fn main() {
    let num = 10;
    println!("Hello, world from Rust Workspaces {num} plus one is {}!", add_lib1::add_lib1(num));
}

