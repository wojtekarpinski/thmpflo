Drupal.behaviors.thmpflo = {
    attach: function() {
        var profileColor = document.getElementsByClassName("color-id")[0].childNodes[0].textContent;
        switch(profileColor) {
            case "blue":
                document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--blue)");
                break;
            case "green":
                document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--green)");
                break;
            case "orange":
                document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--orange)");
                break;
            case "red":
                document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--red)");
                break;
            case "purple":
                document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--purple)");
                break;
            default:
                document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--salmon)");
                break;
        }
    }
}