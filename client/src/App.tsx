import { Toaster } from "@/components/ui/sonner";
import WhatsAppButton from "@/components/WhatsAppButton";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DigitalJourney from "./pages/DigitalJourney";
import ReportsPage from "./pages/ReportsPage";
import Home from "./pages/Home";
import Videos from "./pages/Videos";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/digital-journey"} component={DigitalJourney} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/videos"} component={Videos} />
      <Route path="/reports" component={ReportsPage} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <WhatsAppButton />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
