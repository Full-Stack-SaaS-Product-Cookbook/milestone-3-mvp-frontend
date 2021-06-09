import AppMessage from "../enums/AppMessage";
import { AppMessageConfigEntries } from "../types/AppMessageConfigEntries";

export const appMessageConfig: AppMessageConfigEntries = {
    [AppMessage.MAILCHIMP_SUBSCRIPTION_SUCCESSFUL]: "You've successfully subscribed to receive an email alert when the full ReduxPlate application is released! Thanks!"
}