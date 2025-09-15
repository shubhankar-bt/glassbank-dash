import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CreditCard, 
  Send, 
  Receipt, 
  Settings, 
  Bell, 
  LogOut, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownLeft,
  Plus,
  Eye,
  MoreHorizontal
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import bankingBg from "@/assets/banking-bg.jpg";

const Dashboard = () => {
  const navigate = useNavigate();

  const accounts = [
    { name: "Checking Account", balance: 2850.50, number: "****1234", type: "Primary" },
    { name: "Savings Account", balance: 15420.00, number: "****5678", type: "Savings" },
    { name: "Investment Account", balance: 8750.25, number: "****9012", type: "Investment" }
  ];

  const transactions = [
    { id: 1, description: "Direct Deposit - Salary", amount: 2500.00, type: "credit", date: "Today", category: "Income" },
    { id: 2, description: "Amazon Purchase", amount: -89.99, type: "debit", date: "Yesterday", category: "Shopping" },
    { id: 3, description: "Coffee Shop", amount: -4.50, type: "debit", date: "Yesterday", category: "Food" },
    { id: 4, description: "Transfer to Savings", amount: -500.00, type: "debit", date: "2 days ago", category: "Transfer" },
    { id: 5, description: "Cashback Reward", amount: 25.00, type: "credit", date: "3 days ago", category: "Rewards" }
  ];

  const quickActions = [
    { name: "Transfer Money", icon: Send, description: "Send to another account" },
    { name: "Pay Bills", icon: Receipt, description: "Pay your bills" },
    { name: "Add Money", icon: Plus, description: "Deposit funds" },
    { name: "View Cards", icon: CreditCard, description: "Manage your cards" }
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: `url(${bankingBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/30" />
      
      <div className="relative">
        {/* Header */}
        <header className="glass-card mx-4 mt-4 p-6 rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12 border-2 border-primary/20">
                <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                  JD
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold text-foreground">Welcome back, John</h2>
                <p className="text-muted-foreground">Good morning! Here's your financial overview</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="glass" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="glass" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="glass" size="icon" onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        <div className="p-4 space-y-6">
          {/* Account Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {accounts.map((account, index) => (
              <Card key={index} className="balance-card text-primary-foreground border-primary/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {account.type}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
                <div>
                  <p className="text-white/80 text-sm">{account.name}</p>
                  <p className="text-2xl font-bold">${account.balance.toLocaleString()}</p>
                  <p className="text-white/60 text-xs mt-1">{account.number}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-success">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">+2.5%</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 h-8">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Quick Actions */}
            <div className="lg:col-span-1">
              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="glass"
                      className="w-full justify-start h-auto p-4"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="glass p-2 rounded-lg">
                          <action.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-foreground">{action.name}</p>
                          <p className="text-xs text-muted-foreground">{action.description}</p>
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Recent Transactions */}
            <div className="lg:col-span-2">
              <Card className="glass-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground">Recent Transactions</h3>
                  <Button variant="glass" size="sm">
                    View All
                  </Button>
                </div>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="transaction-item">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`glass p-2 rounded-lg ${
                            transaction.type === 'credit' ? 'border-success/20' : 'border-muted-foreground/20'
                          }`}>
                            {transaction.type === 'credit' ? (
                              <ArrowDownLeft className="h-4 w-4 text-success" />
                            ) : (
                              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{transaction.description}</p>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline" className="text-xs bg-muted/20">
                                {transaction.category}
                              </Badge>
                              <span className="text-xs text-muted-foreground">{transaction.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`font-semibold ${
                            transaction.type === 'credit' ? 'text-success' : 'text-foreground'
                          }`}>
                            {transaction.type === 'credit' ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                          </span>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <MoreHorizontal className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;