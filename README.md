# PayMe - UPI Payment Links

A simple, fast, and secure way to generate and share UPI payment links. Generate dynamic payment pages in seconds and share them with anyone, anywhere.

## Features

- **Lightning Fast** - Generate payment links instantly
- **Secure & Private** - Your UPI ID and transaction details are always protected
- 📱 **Works Everywhere** - Compatible with mobile, desktop, and all major UPI apps
- **Zero Setup** - No registration or configuration required
- **No Commissions** - Keep 100% of your payments
- **Easy Sharing** - Copy link or share directly via native sharing
- **Customizable** - Add names, amounts, and notes to payment links

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15+
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: Vercel / Any Node.js hosting

## How It Works

1. User enters their UPI ID and optional details (name, amount, note)
2. The app generates a payment URL with UPI scheme: `upi://pay?pa=...&pn=...&am=...&tn=...`
3. User can:
   - **Copy** the link to clipboard
   - **Share** using native sharing (mobile)
   - **Open** to directly initiate payment
4. When someone clicks the link, their UPI app opens with pre-filled details
5. Payment can be completed directly in the UPI app

## Security

- No data is stored on servers - everything is client-side
- UPI IDs are only used to generate payment links
- Links are stateless and don't contain sensitive information beyond what's needed for the UPI payment

## 📱 UPI Parameters

The generated UPI links use these parameters:

- `pa` - Payee address (UPI ID)
- `pn` - Payee name (optional)
- `am` - Transaction amount in rupees (optional)
- `tn` - Transaction note/description (optional)

Example: `upi://pay?pa=user@upi&pn=John&am=100&tn=Payment+for+services`

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Open a Pull Request

## Bug Reports

Found a bug? Please open an issue with:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)

## Feature Requests

Have an idea? Open an issue with the `enhancement` label and describe:
- What problem it solves
- How it should work
- Why it's useful

## License

This project is open source and available under the [GPLv2 License](LICENSE).

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons and emojis for visual appeal

## Support

For support, issues, or questions:

- Open an [issue](https://github.com/Ravish-Ranjan/payme/issues) on GitHub
- Check existing [discussions](https://github.com/Ravish-Ranjan/payme/discussions)

---

**Made for easy peer-to-peer payments**
